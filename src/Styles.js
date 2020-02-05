export const maxImageWidth = "850px";

export const slideshowBreakpoint = "900px";
export const columnBreakpoint = "550px";

export const fingerWidth = "44px";
export const smallScreenMargins = "1.4rem";

export const mediumScreenImageWidth = "90vw";
export const mediumScreenSlideshowMargins = `calc((100vw - ${mediumScreenImageWidth}) / 2)`;

export const smallScreenImageWidth = "98vw";
export const smallScreenSlideshowMargins = `calc((100vw - ${smallScreenImageWidth}) / 2)`;

export const primary_color = "#fbc4a0";
export const link_color = "#d04d00";

export const gradientStartColor = "#fdefbd";
export const gradientEndColor = "#fbbf9c";

export const ifNarrowerThan = (breakpoint) => {
  return `@media screen and (max-width: ${breakpoint})`;
}
