export default function () {
  return {
    expanded: [ '콘텐츠' ],
    categoryData: [
      {
        label: '콘텐츠',
        icon: 'content_copy',
        key : 'content',
        children: [
          {
            label: '글 쓰기',
            icon: 'create',
            key: 'write'
          },
          {
            label: '글관리',
            icon: 'article',
            key: 'article-manage'
          },
          {
            label: '카테고리 관리',
            icon: 'category',
            key: 'category-manage'
          },

        ]
      }
    ]
  }
}
