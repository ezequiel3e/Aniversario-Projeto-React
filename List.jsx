
export default function List({birthdayList}){
return (
<>
{birthdayList.map((person) => {
const { id,name,age,image} = person

return (
<article className="person"  key={person.id}>
<img src={image} alt={name} />

<div>

<h4>{name}</h4>
<p>{age}</p>

</div>
</article>

)

  })}
  </>
)
}


