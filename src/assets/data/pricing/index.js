
import imgPricing1 from 'assets/images/app/pricing/01.png';
import imgPricing2 from 'assets/images/app/pricing/02.png';
import imgPricing3 from 'assets/images/app/pricing/03.png';

const data = {
    pricings: [
      {
        thumb: imgPricing1,
        name: 'Pichu',
        price: '50,00 DH',
        description: 'Offrez à vos collaborateurs l\'accès aux conventions simplifiées',
        link: '#',
        btnText: 'Get Package',
        services:[
            {
                content: 'Accès au Store eProgram',
                className: '--on'
            },
            {
                content: 'Nombre de transactions par employé illimité',
                className: '--on'
            },
            {
                content: 'SQL Database.',
                className: '--on'
            }
        ]
      }
      
    ]
    
  };
  export default data;
  