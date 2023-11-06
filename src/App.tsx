import "./styles.css";
import {
  SandpackProvider,
  SandpackLayout,
  SandpackCodeEditor,
  SandpackFileExplorer
} from "@codesandbox/sandpack-react";

export default function App() {
  return (
    <SandpackProvider
      template="vanilla"
      customSetup={{
        entry: "/index.tsx"
      }}
    >
      <SandpackLayout>
        <SandpackFileExplorer />
        <SandpackCodeEditor closableTabs />
      </SandpackLayout>
    </SandpackProvider>
  );
}
