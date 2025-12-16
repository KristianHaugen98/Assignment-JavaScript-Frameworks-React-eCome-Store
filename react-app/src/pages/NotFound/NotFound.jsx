// When page not found, render this:

export const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
      <p className="text-2xl text-muted-foreground mb-8">Page not found</p>
      <a href="/" className="cosmic-button">
        Go back home
      </a>
    </div>
  );
};
