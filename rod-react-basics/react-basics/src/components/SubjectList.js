
export default function SubjectList(props) {

  const { subjects, title } = props

  return (
    <div>
      <h3>{title}</h3>
      <ol className="subject-list">
        {
          subjects.map((subject, i) => {
            return <li key={i}>{subject.code} - {subject.description}</li>
          })
        }
      </ol>
    </div>
  )
}