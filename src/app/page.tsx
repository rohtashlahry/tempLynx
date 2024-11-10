import Content from "./JSON/content";
import ClientelSlider from "./Components/clientel-slider/clientelSlider";
import Testimonials from "./Components/testimonials/Testimonials";
import JumpToTopButton from "./Components/button/JumpToTopButton";
import ContactUsForm from "./Components/contact-cta/ContactUsForm";
import CaseStudySlider from "./Components/case-study/CaseStudySlider";
import Stats from "./Components/statistics/Stats";
import ProcessFlow from "./Components/process-flow/ProcessFlow";
import HeroBanner from "./Components/Hero-section/HeroBanner";
import AboutUs from "./Components/about-section/AboutUs";
import Services from "./Components/services-section/Services";
import ContentField from "./Components/textCard/ContentField";

export default function Home() {
  return (
    <main>
      <section aria-label="Home banner">
        <HeroBanner
          image={Content.Pages.Landing.HeroBanner.Image}
          startTitle={Content.Pages.Landing.HeroBanner.StartTitle}
          highlight={Content.Pages.Landing.HeroBanner.Highlight}
          endTitle={Content.Pages.Landing.HeroBanner.EndTitle}
          subtitle={Content.Pages.Landing.HeroBanner.Subtitle}
          description={Content.Pages.Landing.HeroBanner.Descriptio}
          buttonLabel={Content.Pages.Landing.HeroBanner.ButtonLabel}
        />
      </section>
      <section aria-label="Client logos">
        <ClientelSlider logos={Content.ClientLogosSection.LogosList} />
      </section>
      <section aria-label="About us">
        <AboutUs
          leftTitle={Content.Pages.Landing.AboutUsSection.LeftTitle}
          startTitle={Content.Pages.Landing.AboutUsSection.StartTitle}
          highlights={Content.Pages.Landing.AboutUsSection.Hightlights}
          endTitle={Content.Pages.Landing.AboutUsSection.EndTitle}
          description={Content.Pages.Landing.AboutUsSection.Description}
          buttonLabel={Content.Pages.Landing.AboutUsSection.ButtonLabel}
        />
      </section>
      <section className="p-8 mb-4" aria-label="Statistics">
        <Stats
          title={Content.Pages.Landing.StatisticsSection.Title}
          highlight={Content.Pages.Landing.StatisticsSection.Highlight}
          subtitle={Content.Pages.Landing.StatisticsSection.Subtitle}
          stats={Content.Pages.Landing.StatisticsSection.StatsNumbers}
          buttonText={Content.Pages.Landing.StatisticsSection.ButtonText}
        />
      </section>
      <section aria-label="Services">
        <Services
          serviceList={Content.Pages.Landing.ServicesSection.ServicesList}
          subtitle={Content.Pages.Landing.ServicesSection.Subtitle}
          startTitle={Content.Pages.Landing.ServicesSection.StartTitle}
          highlights={Content.Pages.Landing.ServicesSection.Highlights}
          endTitle={Content.Pages.Landing.ServicesSection.EndTitle}
          description={Content.Pages.Landing.ServicesSection.Description}
          buttonLabel={Content.Pages.Landing.ServicesSection.ButtonLabel}
        />
      </section>
      <section aria-label="Portfolio">
        <CaseStudySlider
          caseStudies={Content.Pages.Landing.CaseStudySection.CaseStudies}
        />
      </section>
      <section aria-label="Contact Us Form" className="p-8">
        <div className="flex items-center justify-center">
          <div className="w-2/3">
            <ContentField
              startTitle={Content.Pages.Landing.ProcessFlowSection.StartTitle}
              highlights={Content.Pages.Landing.ProcessFlowSection.Highlights}
              description={Content.Pages.Landing.ProcessFlowSection.Description}
              alignment="center"
            />
          </div>
        </div>
        <ProcessFlow steps={Content.Pages.Landing.ProcessFlowSection.Data} />
      </section>
      <section className="bg-black text-white p-12" aria-label="Testimonials">
        <div className="w-full">
          <ContentField
            startTitle={Content.Pages.Landing.TestimonialsSection.StartTitle}
            highlights={Content.Pages.Landing.TestimonialsSection.Highlights}
            endTitle={Content.Pages.Landing.TestimonialsSection.EndTitle}
            alignment="center"
          />
        </div>
        <Testimonials
          data={Content.Pages.Landing.TestimonialsSection.Testimonials}
          logos={Content.Pages.Landing.TestimonialsSection.TestimonialsLogos}
        />
      </section>
      <section aria-label="Contact Us Form">
        <ContactUsForm
          startTitle={Content.Pages.Landing.ContactUsSection.StartTitle}
          highlights={Content.Pages.Landing.ContactUsSection.Highlights}
          endTitle={Content.Pages.Landing.ContactUsSection.EndTitle}
          subHeading={Content.Pages.Landing.ContactUsSection.Subheading}
          description={Content.Pages.Landing.ContactUsSection.Description}
        />
      </section>
      <section aria-label="Jump to Top">
        <JumpToTopButton />
      </section>
    </main>
  );
}
