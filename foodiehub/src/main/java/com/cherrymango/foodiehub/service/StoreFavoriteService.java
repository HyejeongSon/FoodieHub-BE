package com.cherrymango.foodiehub.service;

import com.cherrymango.foodiehub.domain.SiteUser;
import com.cherrymango.foodiehub.domain.Store;
import com.cherrymango.foodiehub.domain.StoreFavorite;
import com.cherrymango.foodiehub.dto.FavoriteLike.FavoriteResponseDto;
import com.cherrymango.foodiehub.repository.SiteUserRepository;
import com.cherrymango.foodiehub.repository.StoreFavoriteRepository;
import com.cherrymango.foodiehub.repository.StoreRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class StoreFavoriteService {
    private final StoreRepository storeRepository;
    private final SiteUserRepository siteUserRepository;
    private final StoreFavoriteRepository storeFavoriteRepository;

    // 즐겨찾기 토글
    @Transactional
    public FavoriteResponseDto toggleFavorite(Long storeId, Long userId) {
        Store store = storeRepository.findById(storeId).orElseThrow(() -> new IllegalArgumentException("Store not found"));
        SiteUser user = siteUserRepository.findById(userId).orElseThrow(() -> new IllegalArgumentException("User not found"));

        Optional<StoreFavorite> existingFavorite = storeFavoriteRepository.findByStoreAndUser(store, user);
        boolean isFavorited;

        if (existingFavorite.isPresent()) { // 즐겨찾기 취소
            storeFavoriteRepository.delete(existingFavorite.get());
            isFavorited = false;
        } else { // 즐겨찾기 추가
            StoreFavorite storeFavorite = StoreFavorite.builder()
                    .store(store)
                    .user(user)
                    .favoriteTime(LocalDateTime.now()).build();

            storeFavoriteRepository.save(storeFavorite);
            isFavorited = true;
        }

        long favoriteCount = storeFavoriteRepository.countByStore(store);
        return new FavoriteResponseDto(favoriteCount, isFavorited);
    }

    // 즐겨찾기 제거
    public boolean removeFavorite(Long storeId, Long userId) {
        Optional<StoreFavorite> favorite = storeFavoriteRepository.findByStoreIdAndUserId(storeId, userId);
        if (favorite.isPresent()) {
            storeFavoriteRepository.delete(favorite.get());
            return true;
        }
        return false;
    }
}
