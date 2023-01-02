import useTheme from "./useTheme";

const useOutlineCss = () => {
  const { c, s } = useTheme();

  return {
    borderRadius: s.xxs,
    "&:focus-visible": {
      outline: `${s.xxs} solid ${c.outline}`,
      outlineOffset: s.xxs,
    },
  };
};

export default useOutlineCss;
