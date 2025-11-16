import { companies } from "../data/companies";

export default function TrustedCompanies() {
  return (
    <section className="trusted">
      <h2>Trusted by companies worldwide</h2>
      <div className="trusted-logos">
        {companies.map((comp, idx) => (
          <img key={idx} src={comp.logo} alt={comp.name} />
        ))}
      </div>
    </section>
  );
}
