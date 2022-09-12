import { LineChart } from './components';
import { snapchatData, twitterData } from './data';
import { ChartWrapper } from './styled/ChartWrapper';

const App = () => (
    <ChartWrapper>
        <LineChart data={[twitterData, snapchatData]} />
    </ChartWrapper>
);

export default App;
