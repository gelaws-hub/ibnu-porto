import * as React from "react"

// Simple utility function to join classNames conditionally
function classNames(...classes) {
  return classes.filter(Boolean).join(" ")
}

const AnimatedLink = React.forwardRef(
  (
    {
      className,
      children,
      underlineHeight = 3, // Increased height to overlap with text
      underlineColor = "#00c39a", // Default teal color similar to image
      animationDuration = 500,
      alwaysShowUnderline = false,
      ...props
    },
    ref,
  ) => {
    const underlineStyle = {
      "--underline-height": `${underlineHeight}px`,
      "--underline-color": underlineColor,
      "--animation-duration": `${animationDuration}ms`,
    }

    return (
      <a
        ref={ref}
        className={classNames(
          "group relative inline-block",
          // Position the text above the underline
          "relative z-10",
          // Underline styling
          "after:absolute after:bottom-0 after:left-0 after:z-0 after:h-[var(--underline-height)] after:w-0 after:bg-[var(--underline-color,currentColor)] after:transition-all after:duration-[var(--animation-duration)] after:ease-in-out after:content-['']",
          // Show full underline on hover
          "hover:after:w-full",
          // If alwaysShowUnderline is true, show the underline at full width by default
          alwaysShowUnderline ? "after:w-full" : "",
          className,
        )}
        style={underlineStyle}
        {...props}
      >
        {children}
      </a>
    )
  },
)

AnimatedLink.displayName = "AnimatedLink"

export { AnimatedLink }

