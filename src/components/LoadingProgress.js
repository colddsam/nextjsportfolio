import { useLoading } from '@/context/LoadingContext';

const LoadingProgress = () => {
  const { loadingProgress } = useLoading();

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '5px', background: '#e0e0e0' }}>
      <div
        style={{
          width: `${loadingProgress}%`,
          height: '100%',
          background: '#3b82f6',
          transition: 'width 0.2s',
        }}
      />
    </div>
  );
};

export default LoadingProgress;
