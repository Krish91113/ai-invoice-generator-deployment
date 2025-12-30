import React from "react";

export default function Marquee({
    className = "",
    reverse = false,
    pauseOnHover = false,
    children,
    vertical = false,
    repeat = 4,
    ...props
}) {
    return (
        <div
            {...props}
            className={`group flex overflow-hidden p-2 ${vertical ? "flex-col" : "flex-row"
                } ${className}`}
            style={{
                "--duration": "40s",
                "--gap": "1rem",
                gap: "var(--gap)",
            }}
        >
            {Array(repeat)
                .fill(0)
                .map((_, i) => (
                    <div
                        key={i}
                        className={`flex shrink-0 justify-around ${vertical ? "flex-col" : "flex-row"
                            } ${!vertical && !reverse
                                ? "animate-marquee"
                                : !vertical && reverse
                                    ? "animate-marquee-reverse"
                                    : vertical && !reverse
                                        ? "animate-marquee-vertical"
                                        : "animate-marquee-vertical-reverse"
                            } ${pauseOnHover ? "group-hover:[animation-play-state:paused]" : ""}`}
                        style={{ gap: "var(--gap)" }}
                    >
                        {children}
                    </div>
                ))}
        </div>
    );
}
