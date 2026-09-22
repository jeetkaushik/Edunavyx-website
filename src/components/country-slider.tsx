import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from "@/components/ui/carousel";
import { countries } from "@/lib/countries";

export interface CountrySliderProps {
  onHoverCountry?: (slug: string) => void;
  onLeaveCountry?: () => void;
  onActiveCountryChange?: (slug: string) => void;
}

export function CountrySlider({
  onHoverCountry,
  onLeaveCountry,
  onActiveCountryChange,
}: CountrySliderProps = {}) {
  const [api, setApi] = useState<CarouselApi>();
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    if (!api) return;
    const onSelect = () => {
      const snap = api.selectedScrollSnap();
      setSelected(snap);
      const activeCountry = countries[snap % countries.length];
      if (activeCountry && onActiveCountryChange) {
        onActiveCountryChange(activeCountry.slug);
      }
    };
    onSelect();
    api.on("select", onSelect);
    api.on("reInit", onSelect);
    return () => {
      api.off("select", onSelect);
      api.off("reInit", onSelect);
    };
  }, [api, onActiveCountryChange]);

  return (
    <div className="country-slider">
      <Carousel opts={{ align: "start", loop: true }} setApi={setApi} className="country-carousel">
        <CarouselContent className="country-track">
          {countries.map((country) => (
            <CarouselItem key={country.slug} className="country-slide">
              <Link
                to="/countries/$countrySlug"
                params={{ countrySlug: country.slug }}
                className="country-slide-card"
                aria-label={`Explore studying in ${country.name}`}
                onMouseEnter={() => onHoverCountry?.(country.slug)}
                onMouseLeave={() => onLeaveCountry?.()}
              >
                <img loading="lazy" src={country.monument} alt={country.monumentAlt} width={900} height={620} />
                <div className="country-slide-overlay">
                  <span className="country-flag">{country.flag}</span>
                  <div>
                    <h3>{country.name}</h3>
                    <p>{country.blurb}</p>
                    <span className="country-slide-cta">Explore destination <ArrowRight /></span>
                  </div>
                </div>
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="country-slider-nav">
          <CarouselPrevious className="country-arrow" />
          <CarouselNext className="country-arrow" />
        </div>
      </Carousel>
      <div className="country-dots" role="tablist" aria-label="Country slides">
        {countries.map((country, index) => (
          <button
            key={country.slug}
            type="button"
            role="tab"
            aria-selected={selected === index}
            aria-label={`Show ${country.name}`}
            className={selected === index ? "is-active" : ""}
            onClick={() => api?.scrollTo(index)}
          />
        ))}
      </div>
    </div>
  );
}
