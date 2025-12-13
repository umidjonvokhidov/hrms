import { Badge } from "@workspace/ui/components/badge";
import { Button } from "@workspace/ui/components/button";
import ArrowRight from "@workspace/assets/icons/arrow-right.svg";
import { cn } from "@workspace/ui/lib/utils";
import TextDec from "@workspace/assets/icons/textDec.svg";

const Heading = ({
  badgeTitle,
  badgeTag,
  description,
  primaryButton,
  secondaryButton,
  title,
  size,
  className,
  primaryButtonIcon = true,
}: Heading) => {
  return (
    <header
      className={cn(
        "mx-auto w-full flex flex-col items-center gap-y-10",
        className
      )}
    >
      <div
        className={cn(
          "flex flex-col items-center",
          size === "lg" ? "gap-y-4" : "gap-y-2"
        )}
      >
        {badgeTitle && (
          <Badge
            variant={"secondary"}
            className={cn(badgeTag ? "py-1 pl-1 pr-2" : "py-1.5 px-3")}
          >
            {badgeTag && (
              <Badge className="px-2 py-1.5" variant={"default"}>
                {badgeTag}
              </Badge>
            )}{" "}
            {badgeTitle}
          </Badge>
        )}
        {title && size === "xl" ? (
          <h1 className="relative w-auto mx-auto text-4xl md:text-5xl lg:text-6xl text-dark-500 leading-tight text-center font-bold">
            <TextDec className="shrink-0 w-[38px] h-[39px] absolute inline-flex scale-80 md:scale-90 lg:scale-100 -translate-y-5 -translate-x-7 md:-translate-y-4.5 md:-translate-x-7 lg:-translate-y-4 lg:-translate-x-7.5" />
            {title}
          </h1>
        ) : (
          <h2 className="relative w-auto mx-auto text-3xl md:text-4xl lg:text-5xl text-dark-500 leading-tight text-center font-bold">
            <TextDec className="shrink-0 w-[38px] h-[39px] absolute inline-flex scale-80 md:scale-90 lg:scale-100 -translate-y-6 -translate-x-7 md:-translate-y-6 md:-translate-x-6.5 lg:-translate-y-6.5 lg:-translate-x-6.5" />
            {title}
          </h2>
        )}
        {description && (
          <p className="text-lg font-normal text-center text-gray-700">
            {description}
          </p>
        )}
      </div>
      {(primaryButton || secondaryButton) && (
        <div className="w-full flex flex-col gap-4 sm:flex-row justify-center items-center">
          {primaryButton && (
            <Button className="w-full sm:w-auto">
              {primaryButton} {primaryButtonIcon && <ArrowRight />}
            </Button>
          )}
          {secondaryButton && (
            <Button className="w-full sm:w-auto" variant={"outlineV2"}>
              {secondaryButton}
            </Button>
          )}
        </div>
      )}
    </header>
  );
};
export default Heading;
