// pages/_app.tsx
import { Provider } from 'react-redux'
import { wrapper, store } from '../store';
import { Wrapper } from 'next-redux-wrapper'

const MyApp = ({ Component, pageProps, ...rest }) => {
  const {store, props} = wrapper.useWrappedStore(rest);

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default wrapper.withRedux(MyApp);
