interface PathStepsProps {
  steps: string[];
  current?: number;
}

/** DS PathSteps — numbered step row with connecting rules. */
export default function PathSteps({ steps, current = 0 }: PathStepsProps) {
  return (
    <div className="pathsteps" role="list">
      {steps.map((label, i) => (
        <div key={label} style={{ display: "contents" }}>
          <div className={`pathstep${i === current ? " current" : ""}`} role="listitem">
            <span className="pathstep-num">{i + 1}</span>
            <span className="pathstep-label">{label}</span>
          </div>
          {i < steps.length - 1 && <span className="pathstep-rule" aria-hidden="true" />}
        </div>
      ))}
    </div>
  );
}
