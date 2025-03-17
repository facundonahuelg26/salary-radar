import { ROUTES } from '@/utils'
import { Link } from '@heroui/link'
import { User } from '@heroui/user'
import { useSession } from 'next-auth/react'
const UserData = () => {
  const { data: session } = useSession()

  return (
    <Link href={ROUTES.PROFILE}>
      <User
        avatarProps={{
          src: session?.user?.image || '',
        }}
        description={session?.user?.email}
        name={session?.user?.name}
      />
    </Link>
  )
}

export default UserData
