import { MdAvTimer as icon } from "react-icons/md";

export default {
  name: 'services',
  type: 'document',
  title: 'Services',
  icon,
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'image',
      type: 'mainImage',
      title: 'Image'
    },
    {
      name: 'summary',
      type: 'text',
      title: 'Short summary',
      description: 'For previews, social media etc.'
    },
    {
      name: 'description',
      type: 'bodyPortableText',
      title: 'Description'
    }
  ],
  preview: {
    select: {
      title: 'title',
      sessionType: 'sessionType',
      person: 'person.name',
      media: 'image'
    },
    prepare ({title, media, summary}) {
      return {
        title,
        media,
        summary
      }
    }
  }
}
