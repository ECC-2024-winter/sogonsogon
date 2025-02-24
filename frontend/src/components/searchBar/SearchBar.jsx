import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import * as S from './SearchBar.style';

const SearchBar = () => {
  const { search } = useParams();
  const [query, setQuery] = useState(search || '');
  const navigate = useNavigate();

  const handleSearch = e => {
    e.preventDefault();

    if (query.trim()) {
      navigate(`/results/${encodeURIComponent(query)}`); // 검색 결과 페이지로 이동
    }
  };

  return (
    <S.SearchContainer>
      <S.SearchBar id="search" onSubmit={handleSearch}>
        <S.SearchInput
          type="search"
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="지역/장소/활동 등을 검색하세요."
        />
        <S.SearchButton type="submit">
          <S.SearchIcon />
        </S.SearchButton>
      </S.SearchBar>
    </S.SearchContainer>
  );
};

export default SearchBar;
