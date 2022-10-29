import { Card, CardBody, CardFooter, CardHeader } from 'grommet'

interface SmallSpellCardProps {
  cardContent: string
}

const SmallSpellCard = ({ cardContent }: SmallSpellCardProps) => {
  return (
    <Card height='small' width='small' background='light-1'>
      <CardHeader pad='medium'>TEST</CardHeader>
      <CardBody pad='medium'>{cardContent}</CardBody>
      <CardFooter pad={{ horizontal: 'small' }} background='light-2'>
        FUTER
      </CardFooter>
    </Card>
  )
}

export default SmallSpellCard
