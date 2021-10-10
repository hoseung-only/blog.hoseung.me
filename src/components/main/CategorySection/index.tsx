import styled from "styled-components";

import { useCategories } from "../../../hooks/main/useCategories";

import { CategoryList } from "./CategoryList";

export function CategorySection() {
  const categories = useCategories();
  return (
    <S.Container>
      <CategoryList categories={categories} />
    </S.Container>
  );
}

export function CategorySectionPlaceholder() {
  return <S.Container></S.Container>;
}

const S = {
  Container: styled.div`
    width: 100%;

    display: flex;
    justify-content: center;
  `,
};
