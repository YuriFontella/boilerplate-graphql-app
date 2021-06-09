
import Loader from '@/src/libs/loader'

import List from '@/src/components/pages/users/list'
import Section from '@/src/components/pages/users/section'

const Index = ({ data }) => {

  return (
    <Section>
      <Loader
        source={data?.users}
        component={(item, index) => <List key={index} item={item} />}
        blank={false}
        template={() =>
          <tr>
            <td colSpan="4" className="py-6">
              <div className="flex items-center justify-center">
                <div className="text-sm text-gray-600">Nenhum usuário encontrado</div>
              </div>
            </td>
          </tr>
        }
      />
    </Section>
  )
}

export default Index
