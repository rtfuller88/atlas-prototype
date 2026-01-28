export function WhyThisExists() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-8 space-y-6">
      <h1 className="text-2xl font-bold text-warm-black">Why This Exists</h1>

      {/* The Problem */}
      <section className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h2 className="text-lg font-semibold text-warm-black mb-3">The problem</h2>
        <div className="space-y-3 text-sm text-warm-muted">
          <p>
            People are exposed to different facts, different framings, and different levels of
            certainty about the same events. This isn't a flaw in any one outlet — it's a
            structural feature of how modern news and information flows.
          </p>
          <p>
            Most of us experience the world through feeds, headlines, and timelines that show
            only a narrow slice of what's happening. That slice can feel complete — but it rarely is.
          </p>
          <p>
            The divergence is usually invisible. People assume others are seeing roughly
            the same picture they are. When someone disagrees, the natural conclusion is that they
            must be uninformed or acting in bad faith.
          </p>
          <p>
            But often the disagreement isn't about values or intelligence — it's about exposure.
            People are reasoning from genuinely different inputs, under real uncertainty, and
            neither side realizes it.
          </p>
          <p className="font-medium text-warm-black italic">
            You should get to decide what matters, not your feed.
          </p>
        </div>
      </section>

      {/* What Project Atlas Does */}
      <section className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h2 className="text-lg font-semibold text-warm-black mb-3">What Project Atlas does</h2>
        <div className="space-y-3 text-sm text-warm-muted">
          <p>
            Project Atlas helps you step back from the feed and see the broader information landscape.
          </p>
          <p>
            Instead of showing you more stories, it helps you:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-1">
            <li>
              <span className="font-medium text-warm-black">See attention</span> — what
              different groups focus on and how they frame the same events
            </li>
            <li>
              <span className="font-medium text-warm-black">Find agreement</span> — where
              broad consensus exists, even across groups that seem opposed
            </li>
            <li>
              <span className="font-medium text-warm-black">Locate disputes</span> — what
              is genuinely contested versus what only appears contested due to framing
            </li>
            <li>
              <span className="font-medium text-warm-black">Surface uncertainty</span> — where
              confidence is low and key questions remain open
            </li>
          </ul>
          <p>
            The goal is understanding, not resolution.
            <br />
            Atlas gives you orientation — what you do with it is up to you.
          </p>
        </div>
      </section>

      {/* What Project Atlas Does NOT Do */}
      <section className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h2 className="text-lg font-semibold text-warm-black mb-3">
          What Project Atlas does not do
        </h2>
        <p className="text-sm text-warm-muted mb-2">Project Atlas:</p>
        <ul className="list-disc list-inside space-y-2 text-sm text-warm-muted ml-1">
          <li>does not tell you what to believe</li>
          <li>does not declare any source or claim to be true or false</li>
          <li>does not score bias or rank ideology</li>
          <li>does not optimize for outrage, engagement, or emotional reaction</li>
        </ul>
      </section>

      {/* How to Use This Site */}
      <section className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h2 className="text-lg font-semibold text-warm-black mb-3">How to use this site</h2>
        <ul className="list-disc list-inside space-y-2 text-sm text-warm-muted ml-1">
          <li>
            <span className="font-medium text-warm-black">Start with the Narrative Landscape</span>{' '}
            to zoom out and see how attention and framing differ
          </li>
          <li>
            <span className="font-medium text-warm-black">Notice where perspectives diverge</span> —
            and where they surprisingly overlap
          </li>
          <li>
            <span className="font-medium text-warm-black">Drill into a topic</span> to explore
            agreement, disagreement, and uncertainty
          </li>
          <li>
            <span className="font-medium text-warm-black">Ask yourself:</span> "What might
            others be seeing that I am not?"
          </li>
        </ul>
      </section>

      {/* Manifesto Link */}
      <p className="text-sm text-warm-muted pt-2 pb-4">
        Want the deeper thinking behind Project Atlas?
        <br />
        <a href="/manifesto" className="text-blue-600 hover:text-blue-800 underline">
          Read our manifesto: <span className="italic">The Shared Reality Illusion</span>
        </a>
        .
      </p>
    </main>
  );
}
