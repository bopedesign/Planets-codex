const App = () => {
  const defaults = /*EDITMODE-BEGIN*/{
    "accent": "#d3326a",
    "heroHeadline": "marketing",
    "showItalics": true,
    "processLayout": "split",
    "portfolioStyle": "mocks"
  }/*EDITMODE-END*/;

  const [tweaks, setTweaks] = window.useTweaks ? window.useTweaks(defaults) : [defaults, () => {}];

  React.useEffect(() => {
    document.documentElement.style.setProperty('--accent', tweaks.accent);
  }, [tweaks.accent]);

  return (
    <>
      <Hero />
      <Intro />
      <MoreThanDesign />
      <Portfolio />
      <Process />
      <ServiceArea />
      <Footer />

      {window.TweaksPanel && (
        <window.TweaksPanel title="Tweaks">
          <window.TweakSection title="Brand">
            <window.TweakColor
              label="Accent color"
              value={tweaks.accent}
              onChange={v => setTweaks({ accent: v })}
              presets={['#d3326a', '#e85d3a', '#3a6ad3', '#2d8a5e', '#7c3aed', '#25272b']}
            />
          </window.TweakSection>
        </window.TweaksPanel>
      )}
    </>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
