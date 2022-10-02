import {useState} from 'react'

import {Container, Image, Paragraph, Button} from './styledComponents'

const Unlock = () => {
  const [lock, setLock] = useState(true)

  const onChangeLockStatus = () => {
    setLock(prevSetLock => !prevSetLock)
  }
  return (
    <Container>
      <Image
        alt={lock ? 'lock' : 'unlock'}
        src={
          lock
            ? 'https://assets.ccbp.in/frontend/hooks/lock-img.png'
            : 'https://assets.ccbp.in/frontend/hooks/unlock-img.png'
        }
      />
      <Paragraph lock={lock}>
        {lock ? 'Your Device is Locked' : 'Your Device is Unlocked'}
      </Paragraph>
      <Button onClick={onChangeLockStatus}>{lock ? 'Unlock' : 'Lock'}</Button>
    </Container>
  )
}
export default Unlock
