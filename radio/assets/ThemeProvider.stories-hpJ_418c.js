import{i as e,l as t}from"./iframe-DNla4mPf.js";import{t as n}from"./jsx-runtime-BIE8cfDK.js";import{t as r}from"./Button-DtsZLk1i.js";import"./createRuntimeFn-62c9670f.esm-DKWA1Tvk.js";var i=t(e()),a=t(n()),o=(0,i.createContext)(void 0);const s=({children:e,defaultTheme:t=`light`})=>{let[n,r]=(0,i.useState)(t);(0,i.useEffect)(()=>{if(!(typeof window>`u`))return document.documentElement.setAttribute(`data-theme`,n),()=>{document.documentElement.removeAttribute(`data-theme`)}},[n]);let s=(0,i.useMemo)(()=>({theme:n,setTheme:r}),[n]);return(0,a.jsx)(o.Provider,{value:s,children:e})};s.displayName=`ThemeProvider`;const c=()=>{let e=(0,i.useContext)(o);if(e===void 0)throw Error(`useTheme must be used within a ThemeProvider`);return e};s.__docgenInfo={description:`ThemeProvider Component

Manages theme state and applies \`data-theme\` attribute to document root.
Provides theme context to all child components.

@example
\`\`\`tsx
<ThemeProvider defaultTheme="light">
  <App />
</ThemeProvider>
\`\`\`

@example
\`\`\`tsx
// Use theme in components
const { theme, setTheme } = useTheme();

<button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
  Toggle Theme
</button>
\`\`\``,methods:[],displayName:`ThemeProvider`,props:{children:{required:!0,tsType:{name:`ReactNode`},description:`Child components to be wrapped with theme context`},defaultTheme:{required:!1,tsType:{name:`union`,raw:`'light' | 'dark'`,elements:[{name:`literal`,value:`'light'`},{name:`literal`,value:`'dark'`}]},description:`Initial theme to use
@default 'light'`,defaultValue:{value:`'light'`,computed:!1}}}};var l={title:`Components/ThemeProvider`,component:s,parameters:{layout:`centered`,docs:{description:{component:`ThemeProvider manages theme state and applies \`data-theme\` attribute to document root.

## Features
- Light and dark theme support
- React Context API for theme state
- Automatic data-theme attribute application
- SSR-safe implementation
- Works with Storybook theme switcher

## Usage
Wrap your application with ThemeProvider at the root level:

\`\`\`tsx
<ThemeProvider defaultTheme="light">
  <App />
</ThemeProvider>
\`\`\`

Access theme in any component using the useTheme hook:

\`\`\`tsx
const { theme, setTheme } = useTheme();
\`\`\``}}},tags:[`autodocs`]},u=()=>{let{theme:e,setTheme:t}=c();return(0,a.jsxs)(`div`,{style:{padding:`2rem`,borderRadius:`8px`,backgroundColor:e===`light`?`#f5f5f5`:`#262626`,color:e===`light`?`#171717`:`#fafafa`,minWidth:`400px`},children:[(0,a.jsx)(`h2`,{style:{marginTop:0},children:`Theme Demo`}),(0,a.jsxs)(`p`,{children:[`Current theme: `,(0,a.jsx)(`strong`,{children:e})]}),(0,a.jsxs)(`div`,{style:{display:`flex`,gap:`1rem`,marginTop:`1rem`},children:[(0,a.jsx)(r,{variant:`primary`,onClick:()=>t(`light`),disabled:e===`light`,children:`Light Theme`}),(0,a.jsx)(r,{variant:`primary`,onClick:()=>t(`dark`),disabled:e===`dark`,children:`Dark Theme`})]}),(0,a.jsxs)(`div`,{style:{marginTop:`2rem`},children:[(0,a.jsx)(`h3`,{children:`Component Examples`}),(0,a.jsxs)(`div`,{style:{display:`flex`,gap:`0.5rem`,flexWrap:`wrap`,marginTop:`1rem`},children:[(0,a.jsx)(r,{variant:`primary`,children:`Primary`}),(0,a.jsx)(r,{variant:`secondary`,children:`Secondary`}),(0,a.jsx)(r,{variant:`danger`,children:`Danger`})]})]})]})};const d={args:{defaultTheme:`light`},render:e=>(0,a.jsx)(s,{...e,children:(0,a.jsx)(u,{})})},f={args:{defaultTheme:`dark`},render:e=>(0,a.jsx)(s,{...e,children:(0,a.jsx)(u,{})})},p={args:{defaultTheme:`light`},render:e=>(0,a.jsx)(s,{...e,children:(0,a.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`1rem`},children:[(0,a.jsx)(u,{}),(0,a.jsx)(`div`,{style:{textAlign:`center`,fontSize:`0.875rem`,color:`#737373`},children:`Try switching themes using the toolbar switcher or the buttons above`})]})})};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    defaultTheme: 'light'
  },
  render: args => <ThemeProvider {...args}>
      <ThemeDemo />
    </ThemeProvider>
}`,...d.parameters?.docs?.source},description:{story:`Default story with light theme.
Use the toolbar theme switcher to toggle between light and dark themes.`,...d.parameters?.docs?.description}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    defaultTheme: 'dark'
  },
  render: args => <ThemeProvider {...args}>
      <ThemeDemo />
    </ThemeProvider>
}`,...f.parameters?.docs?.source},description:{story:`Theme provider with dark theme as default.
Use the toolbar theme switcher to toggle between light and dark themes.`,...f.parameters?.docs?.description}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    defaultTheme: 'light'
  },
  render: args => <ThemeProvider {...args}>
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem'
    }}>
        <ThemeDemo />
        <div style={{
        textAlign: 'center',
        fontSize: '0.875rem',
        color: '#737373'
      }}>
          Try switching themes using the toolbar switcher or the buttons above
        </div>
      </div>
    </ThemeProvider>
}`,...p.parameters?.docs?.source},description:{story:`Multiple theme switches demonstration.
Use both the toolbar switcher and the buttons to change themes.`,...p.parameters?.docs?.description}}};const m=[`Default`,`DarkTheme`,`ThemeSwitching`];export{f as DarkTheme,d as Default,p as ThemeSwitching,m as __namedExportsOrder,l as default};