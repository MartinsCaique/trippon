'use client'
import CountUp from 'react-countup'

export const AnimatedCounter = ({ amount }: { amount: number }) => {
  return (
    <span className="inline-block">
      <CountUp
        duration={2.75}
        decimals={2}
        decimal="."
        prefix="$"
        end={amount}
      />
    </span>
  )
}
