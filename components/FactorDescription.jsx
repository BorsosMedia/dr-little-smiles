const FactorDescription = ({title, bullets}) => {
  return(
    <article>
      <h3>{title}</h3>
      {bullets?.length > 0 && bullets.map((bullet, index) => {
        return(
          <p key={index}>{bullet}</p>
        )
      })}
    </article>
  )
}

export default FactorDescription