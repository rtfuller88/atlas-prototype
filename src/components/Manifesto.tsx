import { Link } from 'react-router-dom';

export function Manifesto() {
  return (
    <div className="min-h-screen bg-warm-bg">
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-3xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/why" className="text-sm text-blue-600 hover:text-blue-800">
              ← Back
            </Link>
            <span className="text-xs text-warm-muted">Project Atlas</span>
          </div>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-warm-black mb-8">
          Manifesto: The Shared Reality Illusion
        </h1>

        <article className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 space-y-4 text-sm text-warm-muted">
          <p>
            We live in a world where people no longer share a common understanding of reality.
          </p>
          <p>
            On the issues that matter most — politics, public safety, health, technology,
            economics — people are exposed to different facts, different framings, and different
            levels of certainty. Often this divergence is intentional. Almost always, it is
            invisible.
          </p>

          <p className="font-semibold text-warm-black">
            Most people assume the reality they see is the reality everyone else sees.
          </p>

          <p>
            When others reach different conclusions, disagreement is interpreted as ignorance, bad
            faith, or incompatible values. Conversations harden. Trust erodes. Polarization
            accelerates.
          </p>

          <p className="font-semibold text-warm-black">
            This is not because disagreement has increased.
          </p>

          <p>
            It is because we are living under the shared reality illusion — the belief that we are
            all reasoning from the same set of facts, when in fact we are not.
          </p>

          <p>
            Modern information systems make this worse. They reward confidence over honesty. They
            flatten uncertainty, obscure disagreement, and present unresolved questions as settled
            narratives. Ambiguity is hidden rather than explained. Expert disagreement is compressed
            into headlines.
          </p>

          <p className="font-semibold text-warm-black">
            The result is false certainty at scale.
          </p>

          <p>
            In this environment, genuine reasoning becomes extraordinarily difficult — even for
            intelligent, well-intentioned people. When inputs are fragmented and uncertainty is
            concealed, neither humans nor AI can think clearly.
          </p>

          <p className="font-semibold text-warm-black">
            The problem is not disagreement.
          </p>

          <p>
            Disagreement is inevitable in a complex world.
          </p>

          <p>
            The problem is the invisibility of divergence: unseen differences in facts,
            interpretation, confidence, and values that make people believe they are arguing about
            conclusions when they are actually arguing from different premises.
          </p>

          <p className="font-semibold text-warm-black">
            We believe societies function only when people can see:
          </p>

          <ul className="list-disc list-inside space-y-1 ml-1">
            <li>what is broadly agreed</li>
            <li>what is genuinely disputed</li>
            <li>how uncertain key claims actually are</li>
            <li>and why reasonable people reach different conclusions</li>
          </ul>

          <p className="font-semibold text-warm-black">
            We do not decide what is true.
          </p>

          <p>
            We make the structure of disagreement visible.
          </p>

          <p>
            We expose the assumptions beneath conclusions. We separate facts from interpretation,
            and interpretation from values. We show where more evidence might help — and where it
            will not.
          </p>

          <p className="font-semibold text-warm-black">
            Our goal is not consensus.
          </p>

          <p>
            Our goal is more basic and more necessary: to make it possible to disagree accurately,
            with a shared understanding of reality's complexity.
          </p>

          <p className="font-semibold text-warm-black">
            In a fragmented information world, epistemic visibility is not a luxury.
          </p>

          <p>
            It is the foundation of trust, reasoning, and democratic society.
          </p>
        </article>
      </main>
    </div>
  );
}
