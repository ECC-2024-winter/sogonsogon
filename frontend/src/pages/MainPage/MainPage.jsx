import { useState, useEffect } from 'react';
import { SearchBar, PlaceCard, Category } from '../../components';
import * as S from './Main.style';
import { apiUrl } from '../../Api';
import axios from 'axios';

function useData(url) {
  const [data, setData] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    if (url) {
      axios
        .get(url)
        .then(response => {
          if (response.data.placeInfo) {
            setData(response.data.placeInfo);
          }
        })
        .catch(err => {
          setError(err.response?.data?.error);
        });
    }
  }, [url]);
  return { data, error };
}

function MainPage() {
  const { data: topTrending, error: top3Error } = useData(`${apiUrl}/main/top3`);
  const { data: bestRestaurants, error: best3Error } = useData(`${apiUrl}/main/best3`);
  const { data: recommendedShows, show3Error } = useData(`${apiUrl}/main/show`);

  const handleSave = () => {
    alert('장소가 저장되었습니다!');
  };

  return (
    <S.MainContainer>
      <SearchBar />
      <Category />
      {top3Error && <p>{top3Error}</p>}
      {best3Error && <p>{best3Error}</p>}
      {show3Error && <p>{show3Error}</p>}
      <S.RecommendationContainer>
        {[
          { title: '🔥 이번 주 가장 많이 뜨고 있는 Top 3', placeInfo: topTrending },
          { title: '👍 이 달의 맛집 Best 3', placeInfo: bestRestaurants },
          { title: '😎 이런 장소는 어때요?', placeInfo: recommendedShows },
        ].map(({ title, placeInfo }) => (
          <S.RecommendationSection key={title}>
            <S.RecommendationTitle>{title}</S.RecommendationTitle>
            <S.PlaceCardContainer>
              {placeInfo.map(({ postId, imageUrl, place, address }) => (
                <PlaceCard
                  key={postId}
                  // NOTE: API 연동 전 임시 랜덤 이미지 적용
                  imageUrl={imageUrl || `https://picsum.photos/600/400?random=${postId}`}
                  placeName={place}
                  location={address}
                  onSave={handleSave}
                />
              ))}
            </S.PlaceCardContainer>
          </S.RecommendationSection>
        ))}
      </S.RecommendationContainer>
    </S.MainContainer>
  );
}

export default MainPage;
