import UserClassComponent from "./UserClassComponent"
import { UserComponent } from "./UserComponent"

const About = () => {
  return (
    <div>
        <h2>About Page</h2>
        <p>This is about page</p>
        <UserComponent name='John' />
        <UserClassComponent name='Joe' />
    </div>
  )
}

export default About