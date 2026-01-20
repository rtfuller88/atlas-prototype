Product Requirements Document (PRD)
Working Name
Project Atlas (placeholder)
One‑line Summary
A consumer-first analytics layer on top of news that helps people understand what they are actually disagreeing about by decomposing issues into shared atomic assertions, surfacing agreement/disagreement/uncertainty, and clarifying whether differences stem from facts, interpretation, confidence thresholds, or values.
________________________________________
1. Problem Statement
We live in a world where people can no longer reliably know what to believe about important issues.
Information about the world is fragmented, biased, manipulated, and increasingly tailored to different populations. Different groups are exposed to different fact patterns, different framings, and different confidence signals, often intentionally.
Because this divergence is largely invisible, people assume the facts they see are universal. When others reach different conclusions, disagreement is interpreted as ignorance, bad faith, or incompatible values — rather than as a consequence of different inputs and high underlying uncertainty.
At the same time, modern information systems systematically collapse uncertainty and disagreement into confident narratives. Ambiguity is hidden, expert disagreement is flattened, and unresolved questions are presented as settled. This makes genuine reasoning extremely difficult, even for intelligent and well‑intentioned people.
The result is escalating polarization, collapsing trust in institutions, and social conflict driven not by disagreement itself, but by the invisibility of divergence and uncertainty.
This is the problem we exist to address.
________________________________________
2. Product Vision
We do not determine truth.
We make disagreement, uncertainty, and divergent realities visible and understandable.
The product helps people: - see what is broadly agreed - see what is genuinely disputed - understand why disagreement exists - recognize where uncertainty is irreducible
The goal is not consensus. The goal is accurate disagreement.
________________________________________
3. Target Users
Primary User (North Star)
Thoughtful consumers who want to be genuinely well‑informed.
These users: - actively consume news from multiple sources - are skeptical of confident narratives - feel exhausted by polarization and outrage cycles - want to understand what is actually known, disputed, and uncertain - are willing to spend time to think clearly
They are not looking for takes, speed, or validation. They are looking for sensemaking.
Early Adopters (Credibility & Discipline)
•	Journalists and editors
•	Researchers and analysts
•	Educators and policy professionals
These users are not the end audience. They serve as epistemic stress testers and credibility anchors to ensure the system maintains rigor before broader adoption.
Non‑Target Users
•	Casual news consumers
•	Social media‑first audiences
•	Users seeking quick answers or confirmation
•	Anyone primarily looking to be persuaded
________________________________________
4. Non‑Goals
•	No truth/falsehood verdicts
•	No ideological scoring
•	No persuasion or recommendation engine
•	No social feeds or engagement optimization
•	No breaking-news competition
________________________________________
5. Core Conceptual Model
5.1 Hierarchy
Question
  └── Atomic Assertions (shared)
        └── Evidence
              └── Sources + Versions
  └── Positions (computed views)
Assertions are first‑class, persistent objects.
Positions are derived views, never authored.
________________________________________
6. Atomic Assertions
Definition
An atomic assertion is a minimal, testable statement about the world that: - is shared across positions - can hold multiple states - evolves over time
Types
•	Empirical (what happened)
•	Inferential (what follows from facts)
•	Normative (what should matter)
•	Confidence / epistemic posture (how sure we are)
Allowed Value Models
•	Boolean (true / false / unknown)
•	Ordinal (low / medium / high)
•	Categorical (enumerated options)
•	Probabilistic (confidence ranges)
________________________________________
7. Disagreement Classification
Each assertion is classified by why groups disagree about it.
1.	Empirical disagreement — different beliefs about facts
2.	Inferential disagreement — same facts, different conclusions
3.	Normative disagreement — different values or thresholds
4.	Confidence disagreement — different standards for certainty
This classification is foundational and appears consistently across the UI.
________________________________________
8. Evidence Model
Evidence Objects
•	Claim‑relevant excerpts only (no full‑text by default)
•	Metadata: source, author, timestamp, update time
•	Content hash for change detection
Evidence Attributes
•	Supporting / contradicting / neutral
•	Primary vs secondary
•	Named vs anonymous sourcing
•	Direct vs indirect observation
________________________________________
9. Group Modeling
Groups are defined by assertion profiles, not labels.
For each group: - belief state per assertion - confidence level - basis (sources / evidence types)
________________________________________
10. Computed Positions
Positions are derived views generated by: - selecting relevant assertions - applying belief states and weights - meeting a logical threshold
Positions help users orient quickly, but advanced users may focus entirely on assertion‑level analysis.
________________________________________
11. Example 1 (Low‑Emotion): Return to Office (RTO)
How the Debate Looks Today
A senior leader reads headlines and opinionated posts: - “Remote work is killing productivity.” - “RTO mandates are driving top talent away.” - “The data proves hybrid is best.”
After consuming hours of content, the leader feels confident and frustrated. Everyone seems to be citing studies. Everyone sounds certain. People who disagree feel either naïve or ideologically motivated.
The implicit assumption: we are all arguing about the same facts.
What This System Reveals in 2 Minutes
The system presents the core question:
Should companies mandate a return to office 3+ days per week?
It immediately surfaces:
Areas of broad agreement - Employees value flexibility (very high agreement) - Productivity impacts vary significantly by role - Productivity measurement is noisy and incomplete
The leader realizes: there is far more agreement than the debate suggests.
The Actual Crux of Disagreement
The system highlights two high‑leverage assertions driving most divergence:
1)	In‑office work meaningfully improves collaboration quality (inferential)
•	Groups are looking at the same tools (Slack, Zoom, docs)
•	They infer different models of collaboration (serendipity vs structured async)
•	More data is unlikely to fully resolve this disagreement
2)	Attrition risk outweighs productivity gains (normative)
•	Most groups agree mandates increase attrition
•	They differ on whether that cost is acceptable, and which goals dominate (productivity vs retention vs equity)
The system labels this clearly: > This disagreement is primarily about values and interpretation, not missing facts.
What the User Learns
In under five minutes, the leader understands: - this isn’t a hunt for the one study that settles it - the debate hinges on a small number of assumptions and tradeoffs - better conversation starts by making those assumptions explicit
________________________________________
12. Example 2 (High‑Emotion): Minneapolis ICE Shooting
How the Debate Looks Today
A reader follows breaking news and social media in the days after the incident: - Federal officials say the agent acted in justified self‑defense - Video clips circulate with wildly different interpretations - Headlines declare the facts “clear” — in opposite directions
The reader feels moral certainty and outrage. People who disagree seem either dishonest, misinformed, or dangerous.
The implicit assumption: everyone has seen the same evidence and understands it the same way.
What This System Reveals in 2 Minutes
The system presents the core question:
Was the use of lethal force justified?
It immediately surfaces:
Areas of agreement - A shooting occurred during an ICE operation - Legal thresholds for lethal force are high - Public video evidence is incomplete and ambiguous
The reader realizes: even here, there is shared ground — and real uncertainty.
The Actual Crux of Disagreement
The system highlights three assertions driving most divergence:
1)	The vehicle posed an imminent lethal threat (empirical + inferential)
•	Some groups treat official accounts as sufficient to establish imminence
•	Others treat video ambiguity as evidence the threat threshold wasn’t met
•	The disagreement is partly factual (what happened) and partly about thresholds (what counts as “imminent”)
2)	Viable non‑lethal alternatives existed (inferential)
•	Some interpret the moment as “no time to retreat”
•	Others interpret the same sequence as “repositioning was possible”
•	This often turns on incomplete context (angle, distance, sequence) and competing tactical intuitions
3)	Oversight and investigation were adequate (normative + empirical)
•	Some focus on the legal/procedural bar being met
•	Others focus on transparency, independence, and whether the process earns public trust
•	This is partly about institutions (what happened) and partly about values (what adequacy means)
For each assertion, the system shows: - which groups believe what - how confident they are - what evidence they rely on - what is unknown
And it labels, explicitly: - where disagreement is about facts - where it is about interpretation and thresholds - where it is about values
What the User Learns
The reader sees that: - people are not only disagreeing on conclusions; they are reasoning from different perceived realities - key facts are genuinely ambiguous - some disagreements will not be resolved by more evidence
The moral temperature drops. The reader may still hold a strong view — but now understands what would actually need to change to alter it.
________________________________________
13. Temporal Tracking
The system tracks how assertions evolve over time.
For each assertion: - belief state history - confidence drift - evidence additions/removals
This enables: - “What changed?” - “Which assumptions weakened or strengthened?” - “Are conclusions becoming more or less stable?”
________________________________________
14. Core User Experience (MVP)
Consumer‑First Experience
The product is designed as an analytics layer on top of news, not a feed.
A user arrives with: - a headline - a question - or a sense of confusion about an issue
They are not asked to pick a side.
Default Landing View (30‑second comprehension)
1)	The core question
2)	What is broadly agreed
3)	What is genuinely disputed
4)	Where uncertainty is highest
5)	Why disagreement exists (facts, interpretation, values, confidence)
Exploration Flow
•	Click a disputed assertion → see who believes what and why
•	Click a group → see their assertion profile
•	Click uncertainty → see what would actually reduce it
No infinite scroll. No engagement loops.
Outcome for the User
The user leaves with: - a clearer mental model - lower emotional temperature - a more accurate understanding of disagreement
They may still hold strong views. That is expected.
________________________________________
15. Differentiation vs LLMs
LLMs: - generate one‑off explanations - lack persistence - lack auditability - cannot track change reliably
This product: - maintains structured epistemic state - compares across time and issues - exposes disagreement mechanics
________________________________________
16. MVP Scope
The MVP should feel like a serious consumer product, even if initially invite‑only.
•	10–20 high‑impact questions
•	50–150 atomic assertions total
•	clear agreement/disagreement/uncertainty summaries
•	the two narrative examples above as demo‑quality reference experiences
Explicit exclusions: - no feeds - no breaking news - no virality mechanics - no social features
________________________________________
17. Risks & Mitigations
•	Perceived bias → explicit neutrality, visible structure, and attribution
•	Overconfidence → uncertainty surfaced by default
•	Legal risk → no verdicts, careful language, clear sourcing
•	Overcomplexity → progressive disclosure and clear defaults
________________________________________
18. Success Metrics
•	Users correctly identify disagreement type
•	Reduced time to understand an issue
•	Qualitative feedback: “I see what the argument actually is now”
________________________________________
19. Long‑Term Extensions
•	Assertion taxonomy library
•	Cross‑issue comparison and baselining
•	Enterprise decision support
•	Education / curriculum use
________________________________________
20. Manifesto: The Shared Reality Illusion
We live in a world where people no longer share a common understanding of reality.
On the issues that matter most — politics, public safety, health, technology, economics — people are exposed to different facts, different framings, and different levels of certainty. Often this divergence is intentional. Almost always, it is invisible.
Most people assume the reality they see is the reality everyone else sees.
When others reach different conclusions, disagreement is interpreted as ignorance, bad faith, or incompatible values. Conversations harden. Trust erodes. Polarization accelerates.
This is not because disagreement has increased.
It is because we are living under the shared reality illusion — the belief that we are all reasoning from the same set of facts, when in fact we are not.
Modern information systems make this worse. They reward confidence over honesty. They flatten uncertainty, obscure disagreement, and present unresolved questions as settled narratives. Ambiguity is hidden rather than explained. Expert disagreement is compressed into headlines.
The result is false certainty at scale.
In this environment, genuine reasoning becomes extraordinarily difficult — even for intelligent, well‑intentioned people. When inputs are fragmented and uncertainty is concealed, neither humans nor AI can think clearly.
The problem is not disagreement.
Disagreement is inevitable in a complex world.
The problem is the invisibility of divergence: unseen differences in facts, interpretation, confidence, and values that make people believe they are arguing about conclusions when they are actually arguing from different premises.
We believe societies function only when people can see: - what is broadly agreed - what is genuinely disputed - how uncertain key claims actually are - and why reasonable people reach different conclusions
We do not decide what is true.
We make the structure of disagreement visible.
We expose the assumptions beneath conclusions. We separate facts from interpretation, and interpretation from values. We show where more evidence might help — and where it will not.
Our goal is not consensus.
Our goal is more basic and more necessary: to make it possible to disagree accurately, with a shared understanding of reality’s complexity.
In a fragmented information world, epistemic visibility is not a luxury.
It is the foundation of trust, reasoning, and democratic society.
