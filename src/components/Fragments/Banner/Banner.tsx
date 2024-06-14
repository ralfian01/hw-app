


const Banner = (props: any) => {
  const { banner = "home", children } = props;
  return (
    <div
      className={`hero h-[19.625rem] bg-cover bg-fixed`} style={{
        backgroundImage: `url(${banner})`,
        backdropFilter: "blur(5px)"
      }}>
      {children}
    </div>
  );
};

const BannerHome = () => {
  return (
    <Banner banner="/assets/img/banner/banner-home.png">
      <div className="-z-1 hero-overlay backdrop-blur-sm bg-light bg-opacity-10"></div>
      <div className="z-1 text-center text-dark">
        <div className="max-w py-10 h-44 shadow">
          <div className="flex flex-col items-center gap-[.3125rem] justify-center text-primary">
            <img
              className="z-2 w-[80px]"
              src="/assets/icons/logo.png"
              alt=""
              style={{
                filter: "drop-shadow(-0.3125rem 0 .0600rem rgba(0,0,0,0.2))"
              }}
            />
            <h1
              className="z-10 text-light font-alex-brush font-semibold text-2xl tracking-widest"
              style={{
                textShadow:
                  "0 0 .625rem var(--primary), 0 0 1.25rem #000, 0 0 1.875rem var(--primary), 0 0 2.5rem var(--primary), 0 0 3.125rem var(--primary), 0 0 3.75rem var(--primary)"
              }}>
              Capturing Moments
            </h1>
          </div>
        </div>
      </div>
    </Banner>
  );
};

interface BannerProps {
  banner?: string;
  Bannername?: string;
}

const Pacakage: React.FC<BannerProps> = ({
  banner,
  Bannername = "banner"
}: BannerProps) => {
  return (
    <Banner banner={banner}>
      <div className="-z-1 hero-overlay backdrop-blur-sm bg-light bg-opacity-10"></div>
      <h1 className="z-10 text-center text-light text-4xl font-montserrat font-semibold uppercase drop-shadow-md">
        {Bannername}
      </h1>
    </Banner>
  );
};

Banner.BannerHome = BannerHome;
Banner.Package = Pacakage;

export default Banner;

/**
 *
 */
