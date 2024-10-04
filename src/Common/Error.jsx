function Error() {
  return (
    <>
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "200px" }}
      >
        <p className="text-danger fw-bold">
          Failed to load product. Please try again.
        </p>
      </div>
    </>
  );
}

export default Error;
