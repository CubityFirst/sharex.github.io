# Ruby 3.2+ removed tainted?/taint - patch them back for liquid 4.0.3 compatibility
if RUBY_VERSION >= "3.2"
  class Object
    def tainted?
      false
    end

    def taint
      self
    end
  end
end
