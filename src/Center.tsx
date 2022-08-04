import { css } from "@emotion/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Center = (props: Props) => (
  <div
    css={css`
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    `}
  >
    {props.children}
  </div>
);

export default Center;
