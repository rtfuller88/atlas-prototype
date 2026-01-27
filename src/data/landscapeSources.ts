import type { LandscapeSourceArticle } from '../types';

// ─── Source Articles Lookup ─────────────────────────────────────────────────
// Map of "topicId::clusterId" → LandscapeSourceArticle[]
// 24 entries (every non-zero cell), 2-3 articles each.
// Each narrativeSummary describes the article's framing angle and how it
// contrasts with other clusters' coverage of the same topic.

const sourcesMap: Record<string, LandscapeSourceArticle[]> = {

  // ═══════════════════════════════════════════════════════════════════════════
  // ICE Enforcement / Minneapolis Shootings
  // ═══════════════════════════════════════════════════════════════════════════

  'ice-enforcement::conservative': [
    {
      sourceId: 'ice-con-1',
      title: 'ICE arrests in Minnesota surge include numerous convicted child rapists, killers',
      outlet: 'Fox News',
      url: 'https://www.foxnews.com/politics/ice-arrests-minnesota-surge-include-numerous-convicted-child-rapists-killers',
      narrativeSummary:
        'Fox News frames the Minneapolis ICE operation as a necessary law-enforcement response to sanctuary city obstruction, centering agent safety and criminal apprehensions. Unlike mainstream coverage, the network minimizes bystander shootings and amplifies DHS claims of 10,000 arrests.',
      publishedDate: 'Jan 19, 2026',
    },
    {
      sourceId: 'ice-con-2',
      title: '\'Violent\' Agitator Who Tried to Run Over ICE Agents in Minneapolis Fatally Shot by Feds, DHS Says',
      outlet: 'Daily Wire',
      url: 'https://www.dailywire.com/news/violent-agitator-who-tried-to-run-over-ice-agents-in-minneapolis-fatally-shot-by-feds-dhs-says',
      narrativeSummary:
        'The Daily Wire adopts the DHS characterization of the Minneapolis shooting victim as a "violent agitator" who "weaponized her vehicle," framing the fatal shooting as justified self-defense by federal agents — a narrative directly contradicted by bystander video analyzed by mainstream and international outlets.',
      publishedDate: 'Jan 7, 2026',
    },
    {
      sourceId: 'ice-con-3',
      title: '\'Reprehensible\': Assaults On ICE Agents Skyrocket, Up 830% Over Last Year',
      outlet: 'Daily Wire',
      url: 'https://www.dailywire.com/news/reprehensible-assaults-on-ice-agents-skyrocket-up-830-over-last-year',
      narrativeSummary:
        'Centers ICE agents as victims of an unprecedented surge in violence, framing the 830% increase in assaults as a direct consequence of left-wing hostility. Progressive outlets covering the same period focus instead on agent violence against civilians.',
      publishedDate: 'Jan 15, 2026',
    },
  ],

  'ice-enforcement::mainstream': [
    {
      sourceId: 'ice-ms-1',
      title: 'Minneapolis becomes ground zero in Trump\'s immigration crackdown: Arrests, protests and 2 fatal shootings by agents',
      outlet: 'CBS News',
      url: 'https://www.cbsnews.com/news/minneapolis-trump-immigration-ice-border-patrol-arrests-protests-shootings/',
      narrativeSummary:
        'CBS frames the Minneapolis operation as a constitutional confrontation, leading with the two fatal shootings of U.S. citizens and video evidence contradicting official accounts. Conservative outlets largely omit or contest the video analysis that anchors this reporting.',
      publishedDate: 'Jan 25, 2026',
    },
    {
      sourceId: 'ice-ms-2',
      title: 'Judge orders Trump administration to address motives behind ICE\'s Minnesota operation',
      outlet: 'ABC News',
      url: 'https://abcnews.go.com/US/judge-hears-arguments-state-minnesota-seeks-temporarily-halt/story?id=129567914',
      narrativeSummary:
        'ABC News centers the legal and institutional dimensions — federal judges ordering ICE to appear, DOJ subpoenas of state officials — framing the story as a separation-of-powers crisis rather than the law-enforcement success narrative presented by conservative media.',
      publishedDate: 'Jan 24, 2026',
    },
    {
      sourceId: 'ice-ms-3',
      title: 'About a third of people arrested by ICE had no criminal record, new data shows',
      outlet: 'NPR',
      url: 'https://www.npr.org/2025/12/10/nx-s1-5637397/about-a-third-of-people-arrested-by-ice-had-no-criminal-record-new-data-shows',
      narrativeSummary:
        'NPR uses data to undercut the administration\'s "worst of the worst" rhetoric, showing roughly 75,000 people arrested had no criminal record at all. Conservative outlets rarely cite these numbers, instead amplifying DHS press releases highlighting violent offenders.',
      publishedDate: 'Dec 10, 2025',
    },
  ],

  'ice-enforcement::progressive': [
    {
      sourceId: 'ice-pr-1',
      title: 'ICE Is on a Violent, Illegal, Immoral Rampage',
      outlet: 'Jacobin',
      url: 'https://jacobin.com/2026/01/ice-violence-illegal-immigration-protests',
      narrativeSummary:
        'Jacobin frames the entirety of ICE\'s operations as a lawless "rampage," using maximally critical language to characterize the agency as operating outside constitutional and moral boundaries. This framing sharply contrasts with conservative outlets that characterize the same events as lawful self-defense by officers facing hostile mobs.',
      publishedDate: 'Jan 20, 2026',
    },
    {
      sourceId: 'ice-pr-2',
      title: 'It\'s Easy to Imagine a World Without ICE',
      outlet: 'Jacobin',
      url: 'https://jacobin.com/2026/01/trump-abolish-ice-murder-immigration',
      narrativeSummary:
        'Jacobin argues ICE has only existed since 2003 and calls for its abolition, framing the agency as a rogue institution. This structural critique is entirely absent from mainstream coverage, which treats ICE as a permanent fixture and focuses on oversight reforms rather than abolition.',
      publishedDate: 'Jan 22, 2026',
    },
    {
      sourceId: 'ice-pr-3',
      title: 'Unfettered and Unaccountable: How Trump Is Building a Violent, Shadowy Federal Police Force',
      outlet: 'ProPublica',
      url: 'https://www.propublica.org/article/trump-dhs-ice-secret-police-civil-rights-unaccountable',
      narrativeSummary:
        'ProPublica\'s investigative reporting documents the gutting of DHS civil rights oversight and masked agents refusing to identify themselves — framing the operation as a systemic accountability crisis. Conservative coverage treats these same tactical choices as operational security.',
      publishedDate: 'Jan 15, 2026',
    },
  ],

  'ice-enforcement::wire-international': [
    {
      sourceId: 'ice-wi-1',
      title: '2,000 federal agents sent to Minneapolis area to carry out \'largest immigration operation ever,\' ICE says',
      outlet: 'PBS News',
      url: 'https://www.pbs.org/newshour/politics/2000-federal-agents-sent-to-minneapolis-area-to-carry-out-largest-immigration-operation-ever-ice-says',
      narrativeSummary:
        'PBS reports the scale of the deployment factually — 2,000 agents, later 3,000 — while noting discrepancies between DHS arrest claims and verified data. Unlike conservative framing, the report treats inflated arrest figures as a factual question rather than a narrative choice.',
      publishedDate: 'Jan 6, 2026',
    },
    {
      sourceId: 'ice-wi-2',
      title: 'Legal battles over immigration enforcement operation in Minnesota intensify',
      outlet: 'AP News',
      url: 'https://abcnews.go.com/US/wireStory/legal-battles-immigration-enforcement-operation-minnesota-intensify-129409955',
      narrativeSummary:
        'Wire service coverage documents the escalating legal confrontation between state/local officials and the federal government, including grand jury subpoenas served on Minnesota\'s governor and attorney general — maintaining a fact-driven tone that avoids both conservative triumphalism and progressive alarm.',
      publishedDate: 'Jan 24, 2026',
    },
    {
      sourceId: 'ice-wi-3',
      title: 'Minneapolis shooting the latest flashpoint in ICE enforcement in Trump\'s 2nd term',
      outlet: 'CBC News',
      url: 'https://www.cbc.ca/news/world/ice-history-trump-administration-9.7037733',
      narrativeSummary:
        'International coverage places the Minneapolis shootings in the broader context of Trump\'s second-term enforcement escalation, drawing parallels to authoritarian crackdowns that are entirely absent from U.S. conservative coverage.',
      publishedDate: 'Jan 25, 2026',
    },
  ],

  // ═══════════════════════════════════════════════════════════════════════════
  // Venezuela / Maduro Capture
  // ═══════════════════════════════════════════════════════════════════════════

  'venezuela-maduro::conservative': [
    {
      sourceId: 'ven-con-1',
      title: 'Inside the lightning US strike that overwhelmed Venezuela\'s defenses and seized Maduro',
      outlet: 'Fox News',
      url: 'https://www.foxnews.com/politics/inside-lightning-us-strike-overwhelmed-venezuelas-defenses-seized-maduro',
      narrativeSummary:
        'Fox News frames the Maduro capture as decisive American strength and a fulfillment of Trump\'s campaign promises, emphasizing the "narco-dictator" label and zero U.S. casualties. International outlets focus instead on sovereignty violations and the 100+ Venezuelan deaths.',
      publishedDate: 'Jan 3, 2026',
    },
    {
      sourceId: 'ven-con-2',
      title: 'Trump: Venezuela\'s Maduro \'Captured\' After \'Large-Scale Strike\'',
      outlet: 'Newsmax',
      url: 'https://www.newsmax.com/us/venezuela-donald-trump-nicolas-maduro/2026/01/03/id/1240603/',
      narrativeSummary:
        'Newsmax presents the operation as a decisive Trump-led victory, centering the announcement on Trump himself and framing the capture as the culmination of his tough-on-Venezuela stance. Progressive outlets covering the same operation foreground the lack of congressional authorization and comparisons to Iraq.',
      publishedDate: 'Jan 3, 2026',
    },
  ],

  'venezuela-maduro::mainstream': [
    {
      sourceId: 'ven-ms-1',
      title: 'The surprising US plan in Venezuela comes with huge risks for Trump',
      outlet: 'CNN',
      url: 'https://www.cnn.com/2026/01/05/politics/trump-venezuela-rodriguez-maduro-democracy-analysis',
      narrativeSummary:
        'CNN analysis frames the Venezuela operation as legally questionable and strategically risky, highlighting the lack of congressional notification and expert warnings of "Iraq 2.0." Conservative outlets celebrating the capture largely omit these legal and strategic concerns.',
      publishedDate: 'Jan 5, 2026',
    },
    {
      sourceId: 'ven-ms-2',
      title: 'Previously secret memo gave legal basis for U.S. mission to nab Maduro',
      outlet: 'Washington Post',
      url: 'https://www.washingtonpost.com/national-security/2026/01/13/venezuela-maduro-trump-legal-memo/',
      narrativeSummary:
        'The Washington Post reveals a classified Justice Department memo that provided the legal rationale for the operation, scrutinizing whether the administration\'s legal theory holds up under international and constitutional law — a dimension absent from conservative reporting.',
      publishedDate: 'Jan 13, 2026',
    },
  ],

  'venezuela-maduro::progressive': [
    {
      sourceId: 'ven-pr-1',
      title: '\'We Are Going to Run the Country\': Trump Boasts of Regime Change in Venezuela',
      outlet: 'The Intercept',
      url: 'https://theintercept.com/2026/01/03/venzuela-war-nicolas-maduro-airstrikes-caracas-trump/',
      narrativeSummary:
        'The Intercept frames the Maduro capture as illegal regime change and imperial conquest, centering Trump\'s own words about "running" Venezuela as evidence that the intervention was about territorial control, not counter-narcotics. Conservative outlets dismiss these concerns as reflexive anti-Americanism.',
      publishedDate: 'Jan 3, 2026',
    },
    {
      sourceId: 'ven-pr-2',
      title: 'The War on Drugs: A Pretext for Regime Change in Venezuela',
      outlet: 'Jacobin',
      url: 'https://jacobin.com/2026/01/drug-war-venezuela-maduro-trump',
      narrativeSummary:
        'Jacobin argues the narco-terrorism charges were a manufactured pretext, noting that even the DEA\'s own threat assessment did not list Venezuela as a major trafficking hub — framing the entire operation as regime-change war disguised as counter-narcotics.',
      publishedDate: 'Jan 8, 2026',
    },
    {
      sourceId: 'ven-pr-3',
      title: 'Trump Administration Knew Vast Majority of Venezuelans Sent to Salvadoran Prison Had Not Been Convicted of U.S. Crimes',
      outlet: 'ProPublica',
      url: 'https://www.propublica.org/article/trump-el-salvador-deportees-criminal-convictions-cecot-venezuela',
      narrativeSummary:
        'ProPublica reveals the administration knowingly deported Venezuelan immigrants to El Salvador\'s CECOT prison despite internal records showing most had no criminal convictions, framing the Venezuela crackdown as built on fabricated threat narratives.',
      publishedDate: 'Jan 10, 2026',
    },
  ],

  'venezuela-maduro::wire-international': [
    {
      sourceId: 'ven-wi-1',
      title: 'World reacts to US bombing of Venezuela, \'capture\' of Maduro',
      outlet: 'Al Jazeera',
      url: 'https://www.aljazeera.com/news/2026/1/3/world-reacts-to-reported-us-bombing-of-venezuela',
      narrativeSummary:
        'International coverage leads with sovereignty violations and the UN Secretary-General\'s condemnation, framing the operation as a dangerous precedent in international law. Conservative U.S. outlets barely mention the international backlash.',
      publishedDate: 'Jan 3, 2026',
    },
    {
      sourceId: 'ven-wi-2',
      title: 'U.S. strikes Venezuela and says leader Maduro has been captured and flown out of the country',
      outlet: 'AP News',
      url: 'https://www.pbs.org/newshour/world/us-strikes-venezuela-and-says-its-leader-maduro-has-been-captured-and-flown-out-of-the-country',
      narrativeSummary:
        'AP wire coverage reports the factual sequence of events — the strikes, the capture, the transport — with minimal editorial framing, though it notes the 30-minute operation timeframe and civilian casualties. This neutral tone contrasts with both triumphalist conservative framing and anti-imperialist progressive framing.',
      publishedDate: 'Jan 3, 2026',
    },
    {
      sourceId: 'ven-wi-3',
      title: 'Venezuelans React to US Maduro Arrest with Hope and Uncertainty',
      outlet: 'BBC News',
      url: 'https://www.bbc.com/news/articles/c86vq753nwpo',
      narrativeSummary:
        'BBC on-the-ground reporting captures the dual Venezuelan reaction — hope among those who suffered under Maduro alongside uncertainty about what U.S. control means — a nuance missing from both U.S. conservative celebration and progressive condemnation.',
      publishedDate: 'Jan 5, 2026',
    },
  ],

  // ═══════════════════════════════════════════════════════════════════════════
  // Government Shutdown / DHS Funding
  // ═══════════════════════════════════════════════════════════════════════════

  'government-shutdown::conservative': [
    {
      sourceId: 'shut-con-1',
      title: 'White House not budging on Democrats\' demands as DHS funding mutiny threatens government shutdown',
      outlet: 'Fox News',
      url: 'https://www.foxnews.com/politics/white-house-not-budging-democrats-demands-dhs-funding-mutiny-threatens-government-shutdown',
      narrativeSummary:
        'Fox News frames the shutdown threat as a "Democrat shutdown" driven by partisan obstruction of border-security funding, using the word "mutiny" to characterize Democratic opposition. Mainstream coverage of the same standoff emphasizes bipartisan budget disputes and constitutional spending authority.',
      publishedDate: 'Jan 18, 2026',
    },
    {
      sourceId: 'shut-con-2',
      title: '\'No Mob Veto\': Partial Shutdown Increasingly Likely As GOP Slams DHS Funding Criticism',
      outlet: 'Daily Wire',
      url: 'https://www.dailywire.com/news/no-mob-veto-partial-shutdown-increasingly-likely-as-gop-slams-dhs-funding-criticism',
      narrativeSummary:
        'The Daily Wire connects the funding fight directly to ICE enforcement in Minneapolis, arguing Democrats are weaponizing the budget to "defund" immigration enforcement. Mainstream outlets treat the ICE funding dispute as one component of a broader budget negotiation.',
      publishedDate: 'Jan 20, 2026',
    },
  ],

  'government-shutdown::mainstream': [
    {
      sourceId: 'shut-ms-1',
      title: 'Senate Democrats to vote against DHS funding, setting up potential partial shutdown',
      outlet: 'NPR',
      url: 'https://www.npr.org/2026/01/26/nx-s1-5686473/senate-democrats-to-vote-against-dhs-funding-setting-up-potential-partial-shutdown',
      narrativeSummary:
        'NPR frames the shutdown risk through the lens of constitutional tension between executive enforcement powers and congressional spending authority, giving roughly equal weight to both party positions — a "both sides" approach that progressive outlets criticize as false equivalence.',
      publishedDate: 'Jan 26, 2026',
    },
    {
      sourceId: 'shut-ms-2',
      title: 'Senate Democrats threaten partial government shutdown over DHS funding after Minnesota shooting',
      outlet: 'CNN',
      url: 'https://edition.cnn.com/2026/01/24/politics/democrats-partial-shutdown-minnesota-shooting',
      narrativeSummary:
        'CNN centers the Minneapolis shooting as the catalyst for the DHS funding standoff, connecting the budget fight directly to ICE accountability demands. Conservative outlets frame the same standoff as Democrats exploiting a tragedy to defund border enforcement.',
      publishedDate: 'Jan 24, 2026',
    },
    {
      sourceId: 'shut-ms-3',
      title: 'Lawmakers exploring options for DHS bill in critical week for government funding talks',
      outlet: 'CNN',
      url: 'https://www.cnn.com/2026/01/26/politics/dhs-bill-ice-government-funding-shutdown-congress',
      narrativeSummary:
        'CNN leads with the procedural and human-impact dimensions — federal workers facing furloughs, essential services at risk — a framing largely absent from conservative coverage that focuses exclusively on the political blame game.',
      publishedDate: 'Jan 26, 2026',
    },
  ],

  // ═══════════════════════════════════════════════════════════════════════════
  // MN Somali Fraud Scandal
  // ═══════════════════════════════════════════════════════════════════════════

  'mn-somali-fraud::conservative': [
    {
      sourceId: 'fraud-con-1',
      title: 'How a $250M Minnesota fraud case became Trump\'s latest fight over Somali migrants',
      outlet: 'Fox News',
      url: 'https://www.foxnews.com/politics/what-know-about-minnesotas-feeding-our-future-fraud-center-trumps-latest-crackdown',
      narrativeSummary:
        'Fox News frames the $250M fraud case as a signature government-waste scandal, tying it to Democratic governance in Minnesota and Tim Walz\'s complicity. The story\'s near-total absence from mainstream coverage is itself a major conservative talking point about media bias.',
      publishedDate: 'Jan 12, 2026',
    },
    {
      sourceId: 'fraud-con-2',
      title: 'Minnesota\'s Somali Fraudsters Paid for Rich Lifestyles with Stolen Money',
      outlet: 'Breitbart',
      url: 'https://www.breitbart.com/politics/2026/01/04/report-minnesotas-somali-fraudsters-paid-for-rich-lifestyles-with-stolen-money/',
      narrativeSummary:
        'Breitbart emphasizes the lavish spending of fraud defendants — luxury cars, overseas properties — to build a narrative of immigrant grift at taxpayer expense. Mainstream outlets that have covered the case treat it as a criminal justice story without the immigration-fraud framing.',
      publishedDate: 'Jan 4, 2026',
    },
    {
      sourceId: 'fraud-con-3',
      title: 'Tim Walz Under Fire as Somali Aid Fraud Claims Explode',
      outlet: 'Newsmax',
      url: 'https://www.newsmax.com/us/minnesota-tim-walz-somali/2025/12/29/id/1239989/',
      narrativeSummary:
        'Newsmax positions the fraud as evidence of systemic Democratic corruption in blue states, directly blaming Governor Walz. The story receives zero progressive coverage, which conservative commentators cite as proof of ideological media gatekeeping.',
      publishedDate: 'Dec 29, 2025',
    },
  ],

  // ═══════════════════════════════════════════════════════════════════════════
  // Iran Protests & Regime Crackdown
  // ═══════════════════════════════════════════════════════════════════════════

  'iran-protests::conservative': [
    {
      sourceId: 'iran-con-1',
      title: 'Iranian protest crackdown turns deadliest yet, report says',
      outlet: 'Fox News',
      url: 'https://www.foxnews.com/world/iran-accused-killing-16500-sweeping-genocide-crackdown-report',
      narrativeSummary:
        'Fox News emphasizes the scale of what it characterizes as a "genocide" crackdown, foregrounding the regime\'s brutality and the moral urgency for a strong Western response. Progressive outlets covering the same protests focus on how U.S. sanctions devastated ordinary Iranians and fueled the unrest.',
      publishedDate: 'Jan 12, 2026',
    },
    {
      sourceId: 'iran-con-2',
      title: 'US Warns Iran in Emergency UN Meeting: \'All Options Are on the Table\'',
      outlet: 'Newsmax',
      url: 'https://www.newsmax.com/world/globaltalk/iran-protests-crackdown-trump-us-flights-airspace/2026/01/15/id/1242339/',
      narrativeSummary:
        'Newsmax foregrounds the U.S. diplomatic confrontation with Iran at the UN Security Council, emphasizing American resolve and the credibility of Trump\'s "all options on the table" posture. International outlets report the same UN session with more focus on the humanitarian catastrophe of 6,000+ deaths.',
      publishedDate: 'Jan 15, 2026',
    },
  ],

  'iran-protests::mainstream': [
    {
      sourceId: 'iran-ms-1',
      title: 'Iran\'s troubled regime cracks down hard as Trump ratchets up pressure',
      outlet: 'CNN',
      url: 'https://www.cnn.com/2026/01/11/middleeast/iran-regime-clings-to-power-protests-hnk-latam-intl',
      narrativeSummary:
        'CNN balances coverage between the regime\'s brutal crackdown and the Trump administration\'s pressure campaign, contextualizing the crisis as a pivotal moment where theocratic power meets both internal dissent and external pressure. Unlike conservative coverage, it does not frame the protests primarily as a vindication of U.S. policy.',
      publishedDate: 'Jan 11, 2026',
    },
    {
      sourceId: 'iran-ms-2',
      title: 'Deaths reported during widening protests in Iran sparked by ailing economy',
      outlet: 'NPR',
      url: 'https://www.npr.org/2026/01/01/g-s1-104241/iran-protests-deaths-economy',
      narrativeSummary:
        'NPR centers the economic roots of the protests — 48% inflation, collapsing rial, food price surges — providing context that both conservative (focused on regime weakness) and progressive (focused on sanctions harm) outlets downplay in favor of their respective frames.',
      publishedDate: 'Jan 1, 2026',
    },
    {
      sourceId: 'iran-ms-3',
      title: 'Iran on the Brink? Why the current protests could mark the beginning of the end for the Islamic Republic',
      outlet: 'CNN',
      url: 'https://www.cnn.com/2026/01/13/politics/islamic-republic-iran-protests-different',
      narrativeSummary:
        'CNN analyzes what makes these protests structurally different from past uprisings — the regime\'s weakened military, loss of proxy networks — while conservative outlets declare the regime\'s imminent collapse and progressive outlets warn of imperial opportunism.',
      publishedDate: 'Jan 13, 2026',
    },
  ],

  'iran-protests::progressive': [
    {
      sourceId: 'iran-pr-1',
      title: 'After Weeks of Violence, the Iranian State Hobbles On',
      outlet: 'Jacobin',
      url: 'https://jacobin.com/2026/01/iran-protests-repression-economy-trump',
      narrativeSummary:
        'Jacobin foregrounds the devastating impact of U.S. sanctions on ordinary Iranians — doctors driving cabs, chicken becoming unaffordable — arguing sanctions helped create the economic crisis that sparked protests. Conservative outlets crediting Trump\'s "maximum pressure" largely ignore this causal chain.',
      publishedDate: 'Jan 18, 2026',
    },
    {
      sourceId: 'iran-pr-2',
      title: 'As Protests Engulf Iran, Israel Sees an Opportunity',
      outlet: 'Jacobin',
      url: 'https://jacobin.com/2026/01/iran-protests-israel-trump-war',
      narrativeSummary:
        'Jacobin warns that both Israel and the U.S. are treating the protests as a geopolitical opportunity rather than a humanitarian crisis, framing potential military intervention as "imperial opportunism." This critique has no equivalent in conservative or mainstream coverage.',
      publishedDate: 'Jan 16, 2026',
    },
  ],

  'iran-protests::wire-international': [
    {
      sourceId: 'iran-wi-1',
      title: 'Scale of Iran\'s nationwide protests and bloody crackdown come into focus even as internet is out',
      outlet: 'AP News',
      url: 'https://abcnews.go.com/International/wireStory/scale-irans-nationwide-protests-bloody-crackdown-focus-internet-129514306',
      narrativeSummary:
        'AP wire reporting documents the crackdown\'s scale — $125 million in damage, 750 banks torched — while noting its own inability to independently verify casualties due to the internet blackout. This hallmark wire transparency contrasts with conservative outlets that cite death tolls without sourcing caveats.',
      publishedDate: 'Jan 15, 2026',
    },
    {
      sourceId: 'iran-wi-2',
      title: 'Photos leaked to BBC show faces of hundreds killed in Iran\'s brutal protest crackdown',
      outlet: 'BBC News',
      url: 'https://ca.news.yahoo.com/photos-leaked-bbc-show-faces-060048414.html',
      narrativeSummary:
        'BBC Verify analyzed 392 leaked mortuary photos from Kahrizak, identifying at least 326 victims including 18 women — piercing the regime\'s information blackout with forensic documentation. This verification journalism has no parallel in U.S. domestic coverage from any cluster.',
      publishedDate: 'Jan 21, 2026',
    },
    {
      sourceId: 'iran-wi-3',
      title: 'US imposes sanctions on Iran over crackdown on protesters',
      outlet: 'Reuters',
      url: 'https://www.al-monitor.com/originals/2026/01/us-targets-irans-shadow-fleet-over-crackdown-protesters',
      narrativeSummary:
        'Reuters reports the targeted sanctions against five Iranian officials and the "shadow fleet" sanctions with neutral factual framing, avoiding both the conservative "Trump strength" narrative and the progressive "imperial opportunism" lens.',
      publishedDate: 'Jan 15, 2026',
    },
  ],

  // ═══════════════════════════════════════════════════════════════════════════
  // Clinton / Epstein Contempt
  // ═══════════════════════════════════════════════════════════════════════════

  'clinton-epstein::conservative': [
    {
      sourceId: 'epst-con-1',
      title: 'Bill Clinton called \'prime suspect\' in House Oversight Epstein probe',
      outlet: 'Fox News',
      url: 'https://www.foxnews.com/politics/bill-clinton-prime-suspect-oversight-probe-epstein-case-gop-lawmaker-says',
      narrativeSummary:
        'Fox News frames the Epstein files as exposing long-suspected Clinton corruption, emphasizing bipartisan contempt proceedings to suggest even Democrats can\'t ignore the evidence. The story\'s near-total absence from mainstream and progressive outlets is itself a major conservative grievance.',
      publishedDate: 'Jan 16, 2026',
    },
    {
      sourceId: 'epst-con-2',
      title: 'House Panel Votes To Subpoena Epstein Files, Clintons, Ex-Law Enforcement Leaders',
      outlet: 'Daily Wire',
      url: 'https://www.dailywire.com/news/house-panel-votes-to-subpoena-epstein-files-clintons-ex-law-enforcement-leaders',
      narrativeSummary:
        'The Daily Wire treats the Epstein files as a landmark accountability story, arguing mainstream media silence proves institutional capture. Progressive outlets that have investigated Epstein focus on systemic elite impunity rather than partisan blame.',
      publishedDate: 'Jan 18, 2026',
    },
  ],

  // ═══════════════════════════════════════════════════════════════════════════
  // Greenland / NATO Tariff Crisis
  // ═══════════════════════════════════════════════════════════════════════════

  'greenland-nato::mainstream': [
    {
      sourceId: 'green-ms-1',
      title: 'Trump\'s sudden retreat on Greenland shows that limits still exist',
      outlet: 'Washington Post',
      url: 'https://www.washingtonpost.com/politics/2026/01/25/trump-greenland-nato-davos/',
      narrativeSummary:
        'The Post frames the Greenland crisis as a transatlantic rupture story, emphasizing how Trump\'s tariff threats against Denmark undermined decades of alliance-building. Conservative outlets largely ignore the diplomatic fallout, while progressive outlets deprioritize the story as geopolitical inside-baseball.',
      publishedDate: 'Jan 25, 2026',
    },
    {
      sourceId: 'green-ms-2',
      title: 'On Greenland, Trump worries about Chinese threats. Here\'s why.',
      outlet: 'Washington Post',
      url: 'https://www.washingtonpost.com/world/2026/01/23/trump-greenland-china-arctic-expansion/',
      narrativeSummary:
        'The Post\'s analysis centers the strategic rationale — Chinese Arctic expansion — while noting the coercive diplomacy that alarmed European allies. Wire services report the same events with more European-sourced reactions and less American strategic framing.',
      publishedDate: 'Jan 23, 2026',
    },
  ],

  'greenland-nato::wire-international': [
    {
      sourceId: 'green-wi-1',
      title: 'Trump cancels tariff threat over Greenland, says NATO agreed to \'framework\' of future Arctic deal',
      outlet: 'AP News',
      url: 'https://www.pbs.org/newshour/world/trump-cancels-tariff-threat-over-greenland-says-nato-agreed-to-framework-of-future-arctic-deal',
      narrativeSummary:
        'AP wire reporting covers the tariff de-escalation with factual precision, documenting both the NATO framework agreement and Denmark\'s continued sovereignty assertions. This neutral tone contrasts with U.S. mainstream outlets that frame the retreat as either a humiliation or pragmatic pivot.',
      publishedDate: 'Jan 21, 2026',
    },
    {
      sourceId: 'green-wi-2',
      title: 'Trump drops tariff threat, says he won\'t take Greenland by force',
      outlet: 'Al Jazeera',
      url: 'https://www.aljazeera.com/news/2026/1/21/trump-nixes-european-tariff-threats-over-greenland-after-nato-chief-talks',
      narrativeSummary:
        'Al Jazeera foregrounds the sovereignty principle and European alarm, giving extensive voice to Danish and Greenlandic officials. This perspective is largely absent from U.S. domestic coverage across all clusters.',
      publishedDate: 'Jan 21, 2026',
    },
    {
      sourceId: 'green-wi-3',
      title: 'European leaders warn Trump\'s Greenland tariffs threaten \'dangerous downward spiral\'',
      outlet: 'NPR',
      url: 'https://www.npr.org/2026/01/18/nx-s1-5681422/european-leaders-greenland-tariffs-downward-spiral',
      narrativeSummary:
        'Wire-sourced reporting captures the European diplomatic reaction — warnings of a "dangerous downward spiral" — providing the transatlantic context that U.S. conservative and progressive outlets largely overlook in favor of domestic priorities.',
      publishedDate: 'Jan 18, 2026',
    },
  ],

  // ═══════════════════════════════════════════════════════════════════════════
  // DOJ Investigation of Fed Chair Powell
  // ═══════════════════════════════════════════════════════════════════════════

  'doj-fed-powell::mainstream': [
    {
      sourceId: 'powell-ms-1',
      title: 'Trump administration launches probe of Fed Chairman Jerome Powell',
      outlet: 'Washington Post',
      url: 'https://www.washingtonpost.com/business/2026/01/11/jerome-powell-criminal-investigation/',
      narrativeSummary:
        'The Post frames the DOJ investigation as a direct attack on Federal Reserve independence, emphasizing market reactions and warnings from former Fed chairs. The story is almost exclusively a mainstream concern — conservative outlets either support the investigation or ignore it.',
      publishedDate: 'Jan 11, 2026',
    },
    {
      sourceId: 'powell-ms-2',
      title: 'What to know about Trump\'s ugly feud with the Federal Reserve',
      outlet: 'NPR',
      url: 'https://www.npr.org/2026/01/13/nx-s1-5674777/trump-federal-reserve-jerome-powell',
      narrativeSummary:
        'NPR places the Powell investigation in the broader pattern of norm erosion, connecting it to other institutional attacks. Conservative outlets dismiss "norms erosion" framing as establishment hand-wringing over legitimate executive oversight.',
      publishedDate: 'Jan 13, 2026',
    },
  ],

  // ═══════════════════════════════════════════════════════════════════════════
  // DOGE / Dismantling Federal Government
  // ═══════════════════════════════════════════════════════════════════════════

  'doge-federal::progressive': [
    {
      sourceId: 'doge-pr-1',
      title: 'The Key Figures Working Alongside Elon Musk at DOGE and in the Trump Administration',
      outlet: 'ProPublica',
      url: 'https://projects.propublica.org/elon-musk-doge-tracker/',
      narrativeSummary:
        'ProPublica\'s DOGE personnel tracker identifies 46+ operatives embedded across federal agencies, exposing conflicts of interest that conservative outlets dismiss as bureaucratic resistance. This systematic accountability reporting has no equivalent in conservative or mainstream coverage.',
      publishedDate: 'Jan 10, 2026',
    },
    {
      sourceId: 'doge-pr-2',
      title: 'DOGE Installs a Former Tesla Employee at the FBI',
      outlet: 'The Intercept',
      url: 'https://theintercept.com/2025/04/18/doge-tesla-employee-justice-department-fbi/',
      narrativeSummary:
        'The Intercept documents how former Tesla and SpaceX employees gained access to sensitive DOJ and FBI systems, framing DOGE as corporate capture of government. Conservative outlets portray the same staffing choices as bringing private-sector efficiency to a bloated bureaucracy.',
      publishedDate: 'Apr 18, 2025',
    },
    {
      sourceId: 'doge-pr-3',
      title: 'DOGE Said It Cut $232 Million From Social Security Budget. It Was Only About Half a Million.',
      outlet: 'The Intercept',
      url: 'https://theintercept.com/2025/02/20/doge-social-security-cuts-musk-receipts/',
      narrativeSummary:
        'Investigative reporting debunks DOGE\'s claimed savings figures, documenting a pattern of inflated or fabricated cost-cutting claims. Conservative outlets cite the same DOGE "wall of receipts" as evidence of waste elimination without independent verification.',
      publishedDate: 'Feb 20, 2025',
    },
  ],

  // ═══════════════════════════════════════════════════════════════════════════
  // Destruction of Public Education
  // ═══════════════════════════════════════════════════════════════════════════

  'public-education::progressive': [
    {
      sourceId: 'edu-pr-1',
      title: 'These Activists Want to Dismantle Public Schools. Now They Run the Education Department.',
      outlet: 'ProPublica',
      url: 'https://www.propublica.org/article/education-department-public-schools-activists-linda-mcmahon-trump',
      narrativeSummary:
        'ProPublica documents how school-privatization advocates now lead the Education Department, framing the voucher expansion as a coordinated dismantling of public education. Conservative outlets celebrate the same appointments as champions of parental choice.',
      publishedDate: 'Jan 8, 2026',
    },
    {
      sourceId: 'edu-pr-2',
      title: 'Private Schools, Public Money: School Leaders Are Pushing Parents to Exploit Voucher Programs',
      outlet: 'ProPublica',
      url: 'https://www.propublica.org/article/private-schools-vouchers-parents-ohio-public-funds',
      narrativeSummary:
        'ProPublica investigates how private schools actively recruit public-school families to capture voucher funds, documenting the financial drain on public districts. This accountability angle is absent from conservative coverage praising school choice.',
      publishedDate: 'Jan 12, 2026',
    },
    {
      sourceId: 'edu-pr-3',
      title: 'The School Privatization Movement Is Broadly Unpopular',
      outlet: 'Jacobin',
      url: 'https://jacobin.com/2025/03/school-privatization-conservatives-unpopular-education',
      narrativeSummary:
        'Jacobin highlights polling showing voters in every state — including deep-red Kentucky and Nebraska — have rejected voucher ballot measures, arguing the privatization push is driven by billionaire donors like DeVos and Yass, not popular demand. Conservative outlets frame the same programs as grassroots parental empowerment.',
      publishedDate: 'Mar 2025',
    },
  ],

  // ═══════════════════════════════════════════════════════════════════════════
  // ACA Subsidy Expiration / Healthcare
  // ═══════════════════════════════════════════════════════════════════════════

  'aca-subsidy-expiration::progressive': [
    {
      sourceId: 'aca-pr-1',
      title: 'Americans Are Being Crushed by Health Care Premiums',
      outlet: 'Jacobin',
      url: 'https://jacobin.com/2025/11/health-care-premiums-insurance-profits',
      narrativeSummary:
        'Jacobin frames the subsidy expiration as a crisis manufactured by insurance-industry lobbying and Republican indifference, emphasizing that red-state populations are disproportionately affected. The story\'s near-total absence from conservative media — despite the direct impact on their audience — is itself a major progressive talking point.',
      publishedDate: 'Nov 2025',
    },
    {
      sourceId: 'aca-pr-2',
      title: 'Medicare for All Disappeared. Its Popularity Didn\'t.',
      outlet: 'Jacobin',
      url: 'https://jacobin.com/2025/11/medicare-for-all-popularity-polling',
      narrativeSummary:
        'Jacobin connects the subsidy expiration to the broader failure of incremental health reform, arguing the crisis proves the need for single-payer. This systemic critique has no equivalent in mainstream or conservative coverage, which discusses the subsidies as a standalone budget issue.',
      publishedDate: 'Nov 2025',
    },
  ],

  // ═══════════════════════════════════════════════════════════════════════════
  // Ukraine Peace Talks
  // ═══════════════════════════════════════════════════════════════════════════

  'ukraine-peace::wire-international': [
    {
      sourceId: 'ukr-wi-1',
      title: 'Ukraine, Russia, US to meet for \'first trilateral\' talks to end war',
      outlet: 'Al Jazeera',
      url: 'https://www.aljazeera.com/news/2026/1/22/russia-ukraine-peace-talks-down-to-one-issue-says-us-envoy-witkoff',
      narrativeSummary:
        'Al Jazeera reports the trilateral talks with factual precision, documenting Russia\'s territorial demands and Ukraine\'s refusal, without editorializing on the prospects for peace. The story\'s minimal attention from U.S. domestic outlets reflects their focus on immigration and domestic policy.',
      publishedDate: 'Jan 22, 2026',
    },
    {
      sourceId: 'ukr-wi-2',
      title: 'Ukraine\'s allies meet in Paris, but progress uncertain as Russia shows no signs of budging from demands',
      outlet: 'AP News',
      url: 'https://www.pbs.org/newshour/world/ukraines-allies-meet-in-paris-but-progress-uncertain-as-russia-shows-no-signs-of-budging-from-demands',
      narrativeSummary:
        'AP wire coverage foregrounds European "war fatigue" and the diplomatic deadlock, providing analysis of Zelensky\'s weakening negotiating position. This European-centered framing is unique to international outlets and entirely absent from U.S. domestic coverage.',
      publishedDate: 'Jan 6, 2026',
    },
    {
      sourceId: 'ukr-wi-3',
      title: 'Ukraine-Russia-US hold talks in Abu Dhabi with territory as key issue',
      outlet: 'Al Jazeera',
      url: 'https://www.aljazeera.com/news/2026/1/23/ukraine-russia-us-talks-open-in-abu-dhabi-with-territory-as-key-issue',
      narrativeSummary:
        'Al Jazeera highlights the contradiction between Russia\'s diplomatic posture and continued military strikes, framing the Abu Dhabi talks as a critical test of whether Trump\'s envoy can bridge the territorial gap. Wire services note that Trump\'s envoy has pushed for concessions that European allies view as capitulation.',
      publishedDate: 'Jan 23, 2026',
    },
  ],

  // ═══════════════════════════════════════════════════════════════════════════
  // Gaza Ceasefire Phase Two
  // ═══════════════════════════════════════════════════════════════════════════

  'gaza-ceasefire::wire-international': [
    {
      sourceId: 'gaza-wi-1',
      title: 'Recovery of the last hostage\'s remains in Gaza opens the way for next phase of ceasefire',
      outlet: 'AP News',
      url: 'https://www.pbs.org/newshour/world/recovery-of-the-last-hostages-remains-in-gaza-opens-the-way-for-next-phase-of-ceasefire',
      narrativeSummary:
        'AP wire coverage documents the recovery of the final hostage\'s remains and the transition to phase-two negotiations, maintaining factual neutrality on the competing Israeli and Hamas demands. U.S. domestic coverage from all clusters has largely moved on from Gaza.',
      publishedDate: 'Jan 26, 2026',
    },
    {
      sourceId: 'gaza-wi-2',
      title: 'The ceasefire in Gaza enters the next phase. What does that mean?',
      outlet: 'NPR',
      url: 'https://www.npr.org/2026/01/15/nx-s1-5678940/the-ceasefire-in-gaza-enters-the-next-phase-what-does-that-mean',
      narrativeSummary:
        'NPR\'s explainer format breaks down the phase-two mechanics — disarmament terms, withdrawal timelines, reconstruction conditions — providing context that has receded from U.S. media attention. The sustained international focus contrasts starkly with all U.S. clusters\' declining Gaza coverage.',
      publishedDate: 'Jan 15, 2026',
    },
    {
      sourceId: 'gaza-wi-3',
      title: 'Remains of last Israeli captive Ran Gvili recovered from Gaza, says Israel',
      outlet: 'Al Jazeera',
      url: 'https://www.aljazeera.com/news/2026/1/26/remains-of-last-israeli-captive-in-gaza-retrieved-says-israel',
      narrativeSummary:
        'Al Jazeera frames the hostage recovery through the broader humanitarian lens — famine, destroyed infrastructure, displaced populations — foregrounding UN estimates that rebuilding will take decades and cost $50B+. This forward-looking analysis is absent from episodic U.S. coverage.',
      publishedDate: 'Jan 26, 2026',
    },
  ],
};

// ─── Lookup Function ──────────────────────────────────────────────────────────

export function getCellSources(
  topicId: string,
  clusterId: string,
): LandscapeSourceArticle[] {
  return sourcesMap[`${topicId}::${clusterId}`] ?? [];
}
