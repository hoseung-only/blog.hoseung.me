import dayjs from "dayjs";
import styled from "styled-components";

import { Font } from "../../../components/Font";
import { Skeleton } from "../../../components/Skeleton";

import { Color } from "../../../constants/color";
import { Media } from "../../../constants/media";

interface HeaderProps {
  title: string;
  createdAt: number;
}

export function Header({ title, createdAt }: HeaderProps) {
  return (
    <S.Container>
      <Font.Bold className="title">{title}</Font.Bold>
      <Font.Light className="created-at">{dayjs(createdAt).format("YYYY.MM.DD")}</Font.Light>
    </S.Container>
  );
}

export function HeaderPlaceholder() {
  return (
    <S.Container>
      <Font.Bold className="title">
        <Skeleton.Text />
      </Font.Bold>
      <Font.Light className="created-at">
        <Skeleton.Text />
      </Font.Light>
    </S.Container>
  );
}

const S = {
  Container: styled.div`
    width: 100%;

    padding-bottom: 20px;
    margin-bottom: 40px;

    box-sizing: border-box;

    border-bottom: 1px solid ${Color.Grey100};

    > .title {
      margin-bottom: 20px;

      font-size: 4.2rem;

      > ${Skeleton.Text} {
        width: 300px;
      }
    }

    > .created-at {
      font-size: 1.6rem;
      color: ${Color.Grey400};

      > ${Skeleton.Text} {
        width: 90px;
      }
    }

    ${Media.Mobile} {
      > .title {
        font-size: 3.6rem;

        > ${Skeleton.Text} {
          width: 200px;
        }
      }

      > .created-at {
        font-size: 1.4rem;

        > ${Skeleton.Text} {
          width: 80px;
        }
      }
    }
  `,
};
