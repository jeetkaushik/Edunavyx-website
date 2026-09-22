import { useCallback, useEffect, useRef } from "react";
import { Link } from "@tanstack/react-router";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { services } from "@/lib/services";

export function ServicesCarousel() {
  const resumeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      dragFree: true,
    },
    [
      AutoScroll({
        speed: 1.2,
        startDelay: 600,
        stopOnMouseEnter: true,
        stopOnInteraction: false,
      }),
    ],
  );

  // Honor prefers-reduced-motion accessibility preference
  useEffect(() => {
    if (typeof window === "undefined" || !emblaApi) return;
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handleMotionChange = () => {
      const autoScroll = emblaApi.plugins().autoScroll;
      if (!autoScroll) return;
      if (mediaQuery.matches) {
        autoScroll.stop();
      } else {
        autoScroll.play();
      }
    };

    handleMotionChange();
    mediaQuery.addEventListener("change", handleMotionChange);
    return () => mediaQuery.removeEventListener("change", handleMotionChange);
  }, [emblaApi]);

  // Pause on arrow interaction and automatically resume after a short delay
  const pauseAndResumeAfterDelay = useCallback(
    (delay = 2500) => {
      if (!emblaApi) return;
      const autoScroll = emblaApi.plugins().autoScroll;
      if (!autoScroll) return;

      autoScroll.stop();
      if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
      resumeTimeoutRef.current = setTimeout(() => {
        autoScroll.play();
      }, delay);
    },
    [emblaApi],
  );

  const handlePrev = useCallback(() => {
    if (!emblaApi) return;
    pauseAndResumeAfterDelay();
    emblaApi.scrollPrev();
  }, [emblaApi, pauseAndResumeAfterDelay]);

  const handleNext = useCallback(() => {
    if (!emblaApi) return;
    pauseAndResumeAfterDelay();
    emblaApi.scrollNext();
  }, [emblaApi, pauseAndResumeAfterDelay]);

  // Clean up timer on unmount
  useEffect(() => {
    return () => {
      if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
    };
  }, []);

  return (
    <div className="services-carousel-wrap">
      {/* Embla Viewport for continuous horizontal flow */}
      <div
        className="services-embla"
        ref={emblaRef}
        tabIndex={0}
        role="region"
        aria-roledescription="carousel"
        aria-label="Our Expertise services carousel"
        onKeyDown={(e) => {
          if (e.key === "ArrowLeft") {
            e.preventDefault();
            handlePrev();
          } else if (e.key === "ArrowRight") {
            e.preventDefault();
            handleNext();
          }
        }}
      >
        <div className="services-track">
          {services.map((service) => (
            <div
              className="services-slide"
              key={service.number}
              role="group"
              aria-roledescription="slide"
              aria-label={`Service ${service.number}: ${service.title}`}
            >
              <Link
                to="/services/$serviceSlug"
                params={{ serviceSlug: service.slug }}
                className="service-card"
                aria-label={`Learn more about ${service.title}`}
              >
                <img
                  loading="lazy"
                  src={service.image}
                  alt={service.imageAlt}
                  width={1200}
                  height={900}
                />
                <div className="service-shade" />
                <span className="service-number">{service.number}</span>
                <span className="round-arrow" aria-hidden="true">
                  <ArrowRight />
                </span>
                <div className="service-card-body">
                  <h3 className="service-card-title">{service.title}</h3>
                  <p className="service-description">{service.cardPreview || service.description}</p>
                  <span className="service-learn-more">
                    Learn More <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom-centered navigation arrows */}
      <div className="services-carousel-nav" aria-label="Services carousel controls">
        <button
          type="button"
          onClick={handlePrev}
          className="services-nav-arrow"
          aria-label="Previous service"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          type="button"
          onClick={handleNext}
          className="services-nav-arrow"
          aria-label="Next service"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
