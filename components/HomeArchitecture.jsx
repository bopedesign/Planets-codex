/* "More than design. This is architecture." — section 2 on the Home page.
   Layout:
     Row 1: Title (left) + schematic bleeding to the right edge of the viewport
     Row 2: Three-column Q/A grid beneath, with a top rule */
const HomeArchitecture = () => {
  const questions = [
    {
      q: 'Can your customers find what they are looking for?',
      a: 'We map content and navigation around the decisions real visitors are trying to make.',
    },
    {
      q: 'Is it clear and helpful?',
      a: 'Plain language and honest structure — every page earns its keep.',
    },
    {
      q: 'Are they able to take the next step naturally?',
      a: 'When the right next action is the obvious one, leads and sales follow.',
    },
  ];

  return (
    <section style={{
      background: 'var(--light-2)',
      color: 'var(--dark)',
      padding: '80px 0 96px',
      position: 'relative',
    }}>
      <div className="wrap">
        {/* ROW 1 — title left, schematic right (aligned to content column) */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1.3fr)',
          gap: 48,
          alignItems: 'center',
          marginBottom: 48,
        }}>
          {/* Left: title */}
          <div>
            <h2 style={{
              fontSize: 68,
              lineHeight: 1.04,
              letterSpacing: '-0.028em',
              fontWeight: 400,
              margin: 0,
              color: 'var(--dark)',
            }}>
              More than design.<br />
              <span style={{ fontStyle: 'italic', fontWeight: 300 }}>This is architecture.</span>
            </h2>

            {/* Short pink accent rule */}
            <div style={{
              marginTop: 24,
              width: 44,
              height: 1,
              background: 'var(--accent)',
            }} />
          </div>

          {/* Right: schematic */}
          <div style={{
            position: 'relative',
            width: '100%',
            minHeight: 420,
            display: 'flex',
            alignItems: 'center',
          }}>
            <ArchitectureSchematic />
          </div>
        </div>

        {/* ROW 2 — Q/A grid */}
        <div style={{
          borderTop: '1px solid var(--rule-light)',
          paddingTop: 32,
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 56,
        }}>
          {questions.map((item, i) => {
            const align = i === 0 ? 'flex-start' : i === 1 ? 'center' : 'flex-end';
            return (
              <div key={i} style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: align,
                textAlign: 'left',
              }}>
                <div style={{ maxWidth: 360 }}>
                  <div style={{
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    color: 'var(--accent-text)',
                    marginBottom: 12,
                  }}>
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <div style={{
                    fontSize: 18,
                    fontWeight: 500,
                    lineHeight: 1.35,
                    letterSpacing: '-0.012em',
                    color: 'var(--dark)',
                    marginBottom: 10,
                    textWrap: 'balance',
                  }}>
                    {item.q}
                  </div>
                  <p style={{
                    fontSize: 14,
                    lineHeight: 1.6,
                    color: 'var(--muted-light)',
                    margin: 0,
                  }}>
                    {item.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

/* Recreated schematic. Layout:
     Strategy ─┬─> Design ─────┬─> Results
               │               ├─> Sales
               └─> Development ┴─> Leads
   Connector lines fade from dark grey (root) to accent pink (leaf).
   Sized to fill its container width; last column runs off the right. */
const ArchitectureSchematic = () => {
  const W = 1000;
  const H = 620; // viewBox keeps proportions; container caps visible height

  const boxW = 150;
  const boxH = 50;
  const boxR = 5;

  const nodes = {
    strategy:    { x:  90, y: 310, label: 'Strategy' },
    design:      { x: 440, y: 175, label: 'Design' },
    development: { x: 440, y: 445, label: 'Development' },
    results:     { x: 905, y:  65, label: 'Results' },
    sales:       { x: 905, y: 310, label: 'Sales' },
    leads:       { x: 905, y: 555, label: 'Leads' },
  };

  const elbow = (a, b) => {
    const x1 = a.x + boxW / 2;
    const y1 = a.y;
    const x2 = b.x - boxW / 2;
    const y2 = b.y;
    const midX = (x1 + x2) / 2;
    return `M ${x1} ${y1}
            L ${midX - 36} ${y1}
            Q ${midX} ${y1}, ${midX} ${(y1 + y2) / 2}
            Q ${midX} ${y2}, ${midX + 36} ${y2}
            L ${x2} ${y2}`;
  };

  const links = [
    { from: nodes.strategy,    to: nodes.design,      gradId: 'g1', pathId: 'p1', stage: 0 },
    { from: nodes.strategy,    to: nodes.development, gradId: 'g2', pathId: 'p2', stage: 0 },
    { from: nodes.design,      to: nodes.results,     gradId: 'g3', pathId: 'p3', stage: 1 },
    { from: nodes.design,      to: nodes.sales,       gradId: 'g4', pathId: 'p4', stage: 1 },
    { from: nodes.development, to: nodes.sales,       gradId: 'g5', pathId: 'p5', stage: 1 },
    { from: nodes.development, to: nodes.leads,       gradId: 'g6', pathId: 'p6', stage: 1 },
  ];

  // Pulse timing: stage-0 links fire first, stage-1 links fire after a
  // delay so the pulse reads as traveling Strategy → middle → leaves.
  const PULSE_DUR = 1.6;       // seconds for one dot to traverse a link
  const CYCLE     = 4.4;       // full loop period
  const STAGE_GAP = 1.1;       // delay between stage 0 and stage 1
  const pulseBegin = (stage) => -((CYCLE) - (stage * STAGE_GAP)); // negative begin = pre-rolled

  const verticalHints = [
    { x: nodes.results.x, y1: nodes.results.y + boxH / 2 + 22, y2: nodes.sales.y - boxH / 2 - 22 },
    { x: nodes.sales.x,   y1: nodes.sales.y   + boxH / 2 + 22, y2: nodes.leads.y - boxH / 2 - 22 },
  ];

  const Box = ({ node }) => (
    <g>
      <rect
        x={node.x - boxW / 2}
        y={node.y - boxH / 2}
        width={boxW}
        height={boxH}
        rx={boxR}
        ry={boxR}
        fill="var(--light)"
        stroke="var(--dark)"
        strokeWidth="1"
      />
      <text
        x={node.x}
        y={node.y + 1}
        textAnchor="middle"
        dominantBaseline="middle"
        fontSize="15"
        fontWeight="600"
        fill="var(--dark)"
        style={{ letterSpacing: '-0.005em' }}
      >
        {node.label}
      </text>
    </g>
  );

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      preserveAspectRatio="xMaxYMid meet"
      width="100%"
      style={{
        display: 'block',
        height: 'auto',
        maxHeight: 460,
        overflow: 'visible',
      }}
      aria-label="Architecture diagram: Strategy branches into Design and Development, which both feed Results, Sales, and Leads."
    >
      <defs>
        {links.map((l) => (
          <linearGradient
            key={l.gradId}
            id={l.gradId}
            x1={l.from.x} y1={l.from.y}
            x2={l.to.x}   y2={l.to.y}
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%"   stopColor="var(--dark)" />
            <stop offset="100%" stopColor="var(--accent)" />
          </linearGradient>
        ))}
      </defs>

      {/* Faint dashed vertical rules between stacked right nodes */}
      {verticalHints.map((v, i) => (
        <line
          key={i}
          x1={v.x} y1={v.y1} x2={v.x} y2={v.y2}
          stroke="var(--accent)"
          strokeWidth="1"
          strokeOpacity="0.4"
          strokeDasharray="1 3"
        />
      ))}

      {/* Connectors */}
      {links.map((l, i) => (
        <path
          key={i}
          id={l.pathId}
          d={elbow(l.from, l.to)}
          fill="none"
          stroke={`url(#${l.gradId})`}
          strokeWidth="1.25"
        />
      ))}

      {/* Traveling pulses — one dot per connector, looping Strategy → leaves.
          Purely additive; does not change any static styling. */}
      {links.map((l, i) => (
        <circle
          key={`pulse-${i}`}
          r="2.6"
          fill="var(--accent)"
          opacity="0"
        >
          {/* Traverse the path 0→1 during the first PULSE_DUR of each cycle,
              then sit at the end (hidden via opacity) until the next loop. */}
          <animateMotion
            dur={`${CYCLE}s`}
            begin={`${pulseBegin(l.stage)}s`}
            repeatCount="indefinite"
            calcMode="linear"
            rotate="auto"
            keyPoints={`0;1;1`}
            keyTimes={`0;${(PULSE_DUR / CYCLE).toFixed(4)};1`}
          >
            <mpath href={`#${l.pathId}`} />
          </animateMotion>
          {/* Opacity: fade in at launch, hold visible during travel, fade out on arrival, hidden until next cycle */}
          <animate
            attributeName="opacity"
            dur={`${CYCLE}s`}
            begin={`${pulseBegin(l.stage)}s`}
            repeatCount="indefinite"
            keyTimes={`0;0.04;${(PULSE_DUR / CYCLE - 0.03).toFixed(4)};${(PULSE_DUR / CYCLE).toFixed(4)};1`}
            values="0;1;1;0;0"
          />
        </circle>
      ))}

      {/* Pink dots at the leaf side of each connector */}
      {links.map((l, i) => (
        <circle
          key={`dot-${i}`}
          cx={l.to.x - boxW / 2 - 9}
          cy={l.to.y}
          r="3.8"
          fill="var(--accent)"
        />
      ))}

      {/* Nodes */}
      {Object.values(nodes).map((n) => (
        <Box key={n.label} node={n} />
      ))}
    </svg>
  );
};

window.HomeArchitecture = HomeArchitecture;
