import React, { useEffect, useState } from "react";

const useResponsive = () => {
    const [mediaScreen, setMediaScreen] = useState({
        sm: false,
        md: false,
        lg: false,
        xl: false,
        xxl: false,
    });

    useEffect(() => {
        const mediaQueries = {
            sm: window.matchMedia("(max-width: 860px)"),
        };

        const handleMediaQueryChange = (breakpoint) => (event) => {
            if (event.matches) {
                setMediaScreen((prevState) => ({
                    ...prevState,
                    [breakpoint]: true,
                }));
            } else {
                setMediaScreen((prevState) => ({
                    ...prevState,
                    [breakpoint]: false,
                }));
            }
        };
        handleMediaQueryChange();

        Object.keys(mediaQueries).forEach((breakpoint) => {
            mediaQueries[breakpoint].addListener(handleMediaQueryChange(breakpoint));
            handleMediaQueryChange(breakpoint)(mediaQueries[breakpoint]);
        });

        return () => {
            Object.keys(mediaQueries).forEach((breakpoint) => {
                mediaQueries[breakpoint].removeListener(
                    handleMediaQueryChange(breakpoint)
                );
            });
        };
    }, []);

    return mediaScreen;
};

export default useResponsive;
