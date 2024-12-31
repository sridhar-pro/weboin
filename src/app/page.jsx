import Clients from "@/components/Clients";
import ContactSection from "@/components/ContactSection";
import Container from "@/components/Container";
import FadeIn from "@/components/FadeIn";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import logoPhobiaDark from "@/images/clients/phobia/logo-dark.svg";
import StylizedImage from "@/components/StylizedImage";
import imageLaptop from "@/images/meeting.jpg";

export default function Home() {
  return (
    <main className="text-black">
      <Container className="mt-16 sm:mt-16 flex flex-col lg:flex-row items-center">
  <FadeIn className="">
    <div className="flex flex-col lg:flex-row items-center">
<div className="lg:mr-1">
<h1 className="font-display text-2xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
Redefine How You Grow your{' '}
    <span className="lg:inline hidden text-orange-300 mr-60">Digital Business!</span>
  </h1>
<p className="mt-6 text-xl text-neutral-600">
WEBOIN TECHNOLOGIES is one of the fastest-growing Digital Marketing Agencies.
We research, solve, design, analyze, and develop. Our primary aim is not
designing for our clients but designing for their users.
</p>
</div>
      <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
        <StylizedImage
          src={imageLaptop}
          sizes="(min-width: 1024px) 41rem, 31rem"
          className="justify-center lg:justify-end"
        />
      </FadeIn>
    </div>
  </FadeIn>
</Container>
      <Clients />
      <Testimonials
        className="mt-24 sm:mt-32 lg:mt-40"
        client={{ name: "Phobia", logo: logoPhobiaDark }}
      >
        The team at Studio went above and beyond with our onboarding, even
        finding a way to access the user microphone without triggering one of
        those annoying permission dialogs.
      </Testimonials>
      <Services />
      <ContactSection />
    </main>
  );
}
