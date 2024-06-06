export const CONCEPT_EXAMPLE_DATA = {
  oop: {
    title: 'OOP',
    description: `
    In Ruby, everything is an object, including numbers, strings, and even classes.
    This means that every piece of data and code can be manipulated in a consistent way.

    Ruby uses classes to define blueprints for objects, and modules to group related methods and constants.
    Modules can also be used for mixins, allowing code to be shared among multiple classes.

    Ruby supports inheritance, allowing classes to inherit behavior from other classes.
    Polymorphism enables methods to be redefined in subclasses for specific behavior.`,
    code: `
  class Fighter
    def speak
      "Fight!"
    end
  end
  
  class Scorpion < Fighter
    def speak
      "Get over here!"
    end
  end
  
  class SubZero < Fighter
    def speak
      "Freeze!"
    end
  end
  
  fighter = Fighter.new
  scorpion = Scorpion.new
  subzero = SubZero.new
  
  puts fighter.speak  # => "Fight!"
  puts scorpion.speak # => "Get over here!"
  puts subzero.speak  # => "Freeze!"

`,
  },
  duck: {
    title: 'duck',
    description: `
    Ruby is dynamically typed, meaning variables do not have a fixed type and can hold different types of objects over time.
    This flexibility allows for more expressive and concise code.

    Ruby follows the principle of "if it quacks like a duck, it's a duck."
    Instead of checking an object's type, Ruby focuses on whether an object can respond to the methods being called on it.`,
    code: `
  class Scorpion
    def speak
      "Get over here!"
    end
  end
  
  class Raiden
    def speak
      "Feel the thunder!"
    end
  end
  
  def make_it_speak(fighter)
    fighter.speak
  end
  
  make_it_speak(Scorpion.new) # => "Get over here!"
  make_it_speak(Raiden.new)   # => "Feel the thunder!"
`,
  },
  bpl: {
    title: 'bpl',
    description: `
    A block is an anonymous pieces of code that is enclosed between do...end or {...} that can be passed to a method.
    Procs are objects of class Proc that can be stored in variables and passed around, and they are created with Proc.new or proc.
    Lambdas are a type of proc with stricter argument checking and different behavior with the return keyword, created with lambda or the -> syntax.`,
    code: `
  # Block
  ["Scorpion", "Sub-Zero", "Raiden"].each { |fighter| puts fighter }
  
  # Blocks are frequently used in Rails for ActiveRecord queries and callbacks.
  
  class Fighter < ApplicationRecord
    after_create do |fighter|
      puts "Fighter #{fighter.name} has entered the arena."
    end
  end
  
  # Proc
  my_proc = Proc.new { |fighter| puts "Finish him, #{fighter}!" }
  my_proc.call("Scorpion")
  
  # Procs are often used in Rails for defining custom scopes or default values.
  
  class Fighter < ApplicationRecord
    scope :available, -> { where(available: true) }
  end
  
  # Procs are also useful when we need to defer computation
  
  Rails.application.config.some_setting = Proc.new { perform_special_move }
  
  # Lambda
  # Lambdas are created using lambda or the -> syntax and are similar to procs but with stricter argument handling and different behavior with return.

  my_lambda = -> (fighter) { puts "Fatality, #{fighter}!" }
  my_lambda.call("Sub-Zero")

  # Lambdas are useful for defining scopes or any situation where you need to ensure the correct number of arguments.

  class Arena < ApplicationRecord
    scope :dangerous, -> { where("danger_level > 9000") }
  end
`,
  },
  meta: {
    title: 'meta',
    description: `
    Ruby allows methods to be defined dynamically at runtime.
    This is often used for creating domain-specific languages (DSLs) and enhancing flexibility.

    Ruby provides hooks like method_missing to handle calls to undefined methods, and define_method to dynamically define methods.`,
    code: `
    class DynamicGreeter
    def method_missing(name, *args)
      puts "Hello, #{name.to_s.split('_').map(&:capitalize).join(' ')}!"
    end
  end
  
  greeter = DynamicGreeter.new
  greeter.sub_zero    # => "Hello, Sub Zero!"
  greeter.scorpion    # => "Hello, Scorpion!"
  greeter.liu_kang    # => "Hello, Liu Kang!"

  class MortalKombat
  [:sub_zero, :scorpion, :liu_kang].each do |character|
    define_method(character) do
      puts "Called #{character.to_s.split('_').map(&:capitalize).join(' ')}"
    end
  end
end

kombatant = MortalKombat.new
kombatant.sub_zero    # => "Called Sub Zero"
kombatant.scorpion    # => "Called Scorpion"
kombatant.liu_kang    # => "Called Liu Kang"


`,
  },
};
