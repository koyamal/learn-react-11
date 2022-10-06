import { memo, VFC } from "react";

export const Page404: VFC = memo(() => {
  return (
    <p style={{ fontSize: "24px", color: "red" }}>404(Not Found) page!!</p>
  );
});
