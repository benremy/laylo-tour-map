import { TicketPage } from '@/modules/ticket/components/ticket-page/ticket-page.component';

interface Props {
  params: Promise<{ 'show-id': string }>;
}

export default async function TicketRoute({ params }: Props) {
  const { 'show-id': showId } = await params;
  return <TicketPage showId={showId} />;
}
