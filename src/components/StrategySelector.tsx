import React from 'react';

type Strategy = 'best-fit' | 'first-fit' | 'worst-fit';

interface StrategySelectorProps {
  allocationStrategy: Strategy;
  setAllocationStrategy: (strategy: Strategy) => void;
  strategyDescriptions: Record<Strategy, string>;
}

const StrategySelector: React.FC<StrategySelectorProps> = ({
  allocationStrategy,
  setAllocationStrategy,
  strategyDescriptions,
}) => {
  return (
    <div>
      <label className="block mb-2 font-medium">Allocation Strategy:</label>
      <div className="flex gap-2">
        {(['best-fit', 'first-fit', 'worst-fit'] as Strategy[]).map(
          (strategy) => (
            <button
              key={strategy}
              className={`strategy-button ${
                allocationStrategy === strategy ? 'active' : ''
              }`}
              onClick={() => setAllocationStrategy(strategy)}
              title={strategyDescriptions[strategy]}
            >
              {strategy
                .split('-')
                .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                .join(' ')}
            </button>
          )
        )}
      </div>
    </div>
  );
};

export default StrategySelector;
