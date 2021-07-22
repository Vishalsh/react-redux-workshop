import React, { useContext } from 'react';

const ConfigurableComponentsContext = React.createContext({
  loading: false,
  setLoading: () => {},
  configurableComponents: {},
  setConfigurableComponents: () => {},
  error: null,
  setError: () => {}
});

export default ConfigurableComponentsContext;
export const useConfigurableComponents = () => useContext(ConfigurableComponentsContext);