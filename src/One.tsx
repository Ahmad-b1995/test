function One({componentOneOnClick}) {
  return (
    <div>
      hello, I am component number ONE
      <button onClick={componentOneOnClick}>go to page two</button>
    </div>
  );
}

export default One;
