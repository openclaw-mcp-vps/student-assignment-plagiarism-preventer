export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Nav */}
      <nav className="border-b border-[#21262d] px-6 py-4 flex items-center justify-between max-w-5xl mx-auto">
        <span className="text-[#58a6ff] font-bold text-xl">CiteSafe</span>
        <a href={checkoutUrl} className="bg-[#58a6ff] text-[#0d1117] font-semibold px-4 py-2 rounded-lg text-sm hover:bg-[#79b8ff] transition-colors">Get Started</a>
      </nav>

      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 py-24 text-center">
        <span className="inline-block bg-[#161b22] border border-[#21262d] text-[#58a6ff] text-xs font-medium px-3 py-1 rounded-full mb-6">For University Students</span>
        <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
          Stop Accidental Plagiarism<br />
          <span className="text-[#58a6ff]">Before You Submit</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-2xl mx-auto mb-10">
          Paste or upload your draft and CiteSafe instantly flags passages that need citations, suggests the right format, and helps you submit with confidence.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href={checkoutUrl} className="bg-[#58a6ff] text-[#0d1117] font-bold px-8 py-4 rounded-xl text-lg hover:bg-[#79b8ff] transition-colors">Start for $7/mo</a>
          <a href="#how" className="border border-[#30363d] text-[#c9d1d9] font-semibold px-8 py-4 rounded-xl text-lg hover:border-[#58a6ff] hover:text-[#58a6ff] transition-colors">See How It Works</a>
        </div>
        <p className="mt-6 text-sm text-[#6e7681]">No credit card required for the free scan. Cancel anytime.</p>
      </section>

      {/* How it works */}
      <section id="how" className="bg-[#161b22] border-y border-[#21262d] py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-white text-center mb-12">How CiteSafe Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: "1", title: "Paste or Upload", desc: "Drop in your essay draft, research paper, or any written work in progress." },
              { step: "2", title: "AI Scans Your Text", desc: "Our AI identifies phrases, ideas, and passages that may require a citation." },
              { step: "3", title: "Get Citation Suggestions", desc: "Receive properly formatted APA, MLA, or Chicago citations ready to insert." }
            ].map((item) => (
              <div key={item.step} className="bg-[#0d1117] border border-[#21262d] rounded-xl p-6">
                <div className="w-10 h-10 rounded-full bg-[#58a6ff] text-[#0d1117] font-bold flex items-center justify-center mb-4 text-lg">{item.step}</div>
                <h3 className="text-white font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-[#8b949e] text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-5xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Simple, Honest Pricing</h2>
        <p className="text-[#8b949e] mb-12">One plan. Everything included. Less than a coffee per week.</p>
        <div className="max-w-sm mx-auto bg-[#161b22] border-2 border-[#58a6ff] rounded-2xl p-8">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Student Plan</div>
          <div className="text-5xl font-extrabold text-white mb-1">$7<span className="text-xl font-normal text-[#8b949e]">/mo</span></div>
          <p className="text-[#8b949e] text-sm mb-8">Billed monthly. Cancel anytime.</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited document scans",
              "APA, MLA & Chicago citations",
              "AI-powered plagiarism detection",
              "Dashboard to manage all drafts",
              "Priority email support"
            ].map((feat) => (
              <li key={feat} className="flex items-center gap-3 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff] font-bold">✓</span>{feat}
              </li>
            ))}
          </ul>
          <a href={checkoutUrl} className="block w-full bg-[#58a6ff] text-[#0d1117] font-bold py-3 rounded-xl hover:bg-[#79b8ff] transition-colors text-center">Get CiteSafe Now</a>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#161b22] border-t border-[#21262d] py-20">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              {
                q: "Is CiteSafe the same as a plagiarism checker?",
                a: "No. Plagiarism checkers tell you after the fact. CiteSafe works while you write, proactively suggesting citations so you never accidentally plagiarize in the first place."
              },
              {
                q: "Which citation formats are supported?",
                a: "CiteSafe supports APA 7th edition, MLA 9th edition, and Chicago 17th edition — the three most common formats required by universities worldwide."
              },
              {
                q: "Can I cancel my subscription at any time?",
                a: "Absolutely. There are no long-term contracts. Cancel with one click from your account dashboard and you won't be charged again."
              }
            ].map((item) => (
              <div key={item.q} className="border border-[#21262d] rounded-xl p-6">
                <h3 className="text-white font-semibold mb-2">{item.q}</h3>
                <p className="text-[#8b949e] text-sm leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#21262d] py-8 text-center text-[#6e7681] text-sm">
        <p>© {new Date().getFullYear()} CiteSafe. Built for students who care about academic integrity.</p>
      </footer>
    </main>
  );
}
