interface Props {
  text: string
  Icon: any
  avatar?: string
  feed?: boolean
}

function HeaderLink({ Icon, text, avatar, feed }: Props) {
  return (
    <div
      className={`flex cursor-pointer flex-col items-center justify-center ${
        feed
          ? 'space-y-1 text-black/60 hover:text-black dark:text-white/75 dark:hover:text-white lg:-mb-1.5'
          : 'text-gray-500 hover:text-gray-700'
      }`}
    >
      {avatar ? <Icon className="!h-7 !w-7 lg:!-mb-1" /> : <Icon />}
      <p className="text-sm">{text}</p>
    </div>
  )
}

export default HeaderLink
